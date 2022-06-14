import telebot
import json
import base64
from telebot import types
from config import TOKEN


bot = telebot.TeleBot(TOKEN)


@bot.message_handler(commands=['start'])
def start(message):
    markup = telebot.types.InlineKeyboardMarkup()

    g = open('users.json', 'r', encoding='utf-8')
    json_data = json.loads(g.read())

    flag = False

    for user in json_data['users']:
        if message.chat.id == user['chat_id']:
            flag = True
            break

    if flag:
        start_message = open('static/messages/start_message_alt.txt')
        markup.add(types.InlineKeyboardButton(text='Перейти в главное меню', callback_data="menu"))
        markup.add(types.InlineKeyboardButton(text='Выйти из аккунта', callback_data="logout-menu"))
    else:
        start_message = open('static/messages/start_message.txt')
        markup.add(types.InlineKeyboardButton(text='Начать!', callback_data="start_page"))

    bot.send_message(message.chat.id, text=start_message.read().format(message.from_user), reply_markup=markup)


@bot.callback_query_handler(func=lambda call: True)
def query_handler(call):
    if call.data == 'start_page':
        start_page_message = open('static/messages/start_page_message.txt')
        markup = telebot.types.InlineKeyboardMarkup()
        markup.add(types.InlineKeyboardButton(text='Авторизация', callback_data="login"))
        markup.add(types.InlineKeyboardButton(text='Регистариция', url="rezhduma.live/registration"))
        bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id, text=start_page_message,
                              reply_markup=markup)

    elif call.data == 'menu':
        menu_message = open('static/messages/menu_message.txt')
        markup = types.InlineKeyboardMarkup()
        markup.add(types.InlineKeyboardButton(text="Выйти", callback_data="logout-menu"))
        markup.add(types.InlineKeyboardButton(text="Перейти на сайт", url='rezhduma.live'))
        bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id, text=menu_message,
                              reply_markup=markup)

    elif call.data == 'login':
        login_message = open('static/messages/login_message.txt')

        bot.delete_message(chat_id=call.message.chat.id, message_id=call.message.message_id)

        markup = types.InlineKeyboardMarkup()
        markup.add(types.InlineKeyboardButton(text="Узнать свой токен", url='rezhduma.live'))
        markup.add(types.InlineKeyboardButton(text="Назад", callback_data='start-page'))
        msg = bot.send_message(call.message.chat.id, text=login_message, reply_markup=markup)
        bot.register_next_step_handler(msg, auth)

    elif call.data == 'logout-menu':
        markup = types.InlineKeyboardMarkup()
        markup.add(types.InlineKeyboardButton(text="Да", callback_data="logout"))
        markup.add(types.InlineKeyboardButton(text='Нет', callback_data='menu'))
        bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id,
                              text="Вы уврены?", reply_markup=markup)

    elif call.data == 'logout':
        logout(call.message)

        logout_message = open('static/messages/logout_message.txt')
        markup = telebot.types.InlineKeyboardMarkup()
        markup.add(types.InlineKeyboardButton(text='Перейти в стартовое меню', callback_data="start_page"))
        bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id, text=logout_message,
                              reply_markup=markup)


@bot.message_handler(content_types=['text'])
def chatting(message):
    bot.delete_message(message.chat.id, message.message_id)


def auth(message):
    try:
        chat_id = message.chat.id

        base64_string = message.text
        base64_bytes = base64_string.encode("ascii")

        sample_string_bytes = base64.b64decode(base64_bytes)
        data = sample_string_bytes.decode("ascii")

        g = open('users.json', 'r', encoding='utf-8')
        json_data = json.loads(g.read())

        json_data['users'].append({
            'login': data,
            'chat_id': chat_id,
        })

        with open('users.json', 'w') as users:
            json.dump(json_data, users)

        markup = types.InlineKeyboardMarkup()
        markup.add(types.InlineKeyboardButton(text='Перейти в главное меню', callback_data='menu'))
        bot.send_message(chat_id=message.chat.id, text=f"Вы аторизовались под логином \"{data}\"", reply_markup=markup)

    except:
        markup = types.InlineKeyboardMarkup()
        markup.add(types.InlineKeyboardButton(text='Попробовать снова', callback_data='login'))
        markup.add(types.InlineKeyboardButton(text='Вернуться', callback_data='start-menu'))
        bot.send_message(chat_id=message.chat.id, text="Неверный токен", reply_markup=markup)


def logout(message):
    chat_id = message.chat.id

    g = open('users.json', 'r', encoding='utf-8')
    json_data = json.loads(g.read())

    for user in json_data['users']:
        if user['chat_id'] == chat_id:
            json_data['users'].remove(user)

    with open('users.json', 'w') as users:
        json.dump(json_data, users)


def send_notice(login, url, title):
    chat_id = ''

    g = open('users.json', 'r', encoding='utf-8')
    json_data = json.loads(g.read())

    for user in json_data['users']:
        if user['login'] == login:
            chat_id = user['chat_id']

    text = title + '\n' + url
    bot.send_message(chat_id=chat_id, text=text)


if __name__ == '__main__':
    try:
        bot.enable_save_next_step_handlers(delay=2)
        bot.load_next_step_handlers()
        bot.polling(none_stop=True)
    except:
        pass
