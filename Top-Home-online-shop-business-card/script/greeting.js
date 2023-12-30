function greeting (Name)
{
    if (isNumeric(Name)|| string.equals("")) {
        Name = "некорректный ввод";
    } else{
        Name = Name .trim();
    }
     return console.log("Привет, ${name}");
}

let user_name = prompt  ("Здравствуйте, Введите свое имя: ")
greeting (user_name)
