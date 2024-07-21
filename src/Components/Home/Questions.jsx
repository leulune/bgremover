import React from "react";
import QA from "../Qlego/QA";

function Questions() {
  return (
    <div className="container-8 flex justify-center lg:mt-24">
      <div className="w-[768px]">
        <div className="text-center">
          <p className="font-semibold text-[18px] leading-[22px] text-blue-600">
            Часто задаваемые вопросы
          </p>
        </div>
        <div className="mb-6 mt-3 text-center lg:mb-12">
          <h2 className="snap-block-heading">
            Часто задаваемые вопросы об удалении фона:
          </h2>
        </div>
        <ul className="border-t divide-y">
          <li id="1">
            <QA
              question="Предоставляет ли Remove bg инструменты для редактирования фона
              фотографий?"
              answer="Да и многое другое! Мы предлагаем пользователям несколько вариантов
            редактирования нового фона изображения по своему вкусу. Вы можете
            добавить другие фотографии поверх или полностью заменить фон нашей
            бесплатной библиотекой фоновых шаблонов."
            />
          </li>
          <li id="2">
            <QA
              question="Как увеличить глубину и сфокусировать изображения с помощью
              Remove-bg.ai?"
              answer="С помощью Remove-bg.ai вы можете настроить тени и контуры на ваших изображениях. 
              Тени добавляют глубину и делают изображения более реалистичными и трехмерными. 
              Контуры помогают подчеркнуть определенные элементы, направляя внимание зрителя. 
              Эти инструменты могут значительно улучшить визуальное воздействие вашего изображения."
            />
          </li>
          <li id="3">
            <QA
              question="Может ли Removebg сделать прозрачный фон?"
              answer="Да! Фактически, наша основная функция - быстро и точно вырезать фон из изображения и заменить его новым прозрачным фоном, готовым к редактированию. 
            Обратите внимание, что существует разница между параметрами Белый фон и Прозрачный фон. 
            К счастью, Remove-bg.ai также поддерживает удаление белого фона!"
            />
          </li>
          <li id="4">
            <QA
              question="Могу ли я удалить фоновое изображение на устройствах iPhone / iOS?"
              answer="Да. Наше приложение было адаптировано для совместимости с большинством современных телефонных устройств (с обновленной ОС). 
            Для iPhone, iPad - просто зайдите на наш веб-сайт и загрузите свое изображение так же, как на настольном компьютере/ПК и нашем bg remover будет работать без проблем."
            />
          </li>
          <li id="5">
            <QA
              question="Могут ли устройства Android использовать это приложение для
            удаления фона?"
              answer="Подобно устройствам iOS, наше приложение без проблем работает на устройствах Android. 
            Процесс в основном такой же, никаких сложностей."
            />
          </li>
          <li id="6">
            <QA
              question="Почему я должен использовать это онлайн-удаление фона?"
              answer="Remove-bg.ai уверен, что точная настройка алгоритма позволяет нашему приложению работать наравне или даже лучше в крайних случаях с аналогичными продуктами на рынке. 
            Наше приложение также просто в использовании даже для новичков."
            />
          </li>
          <li id="7">
            <QA
              question="Это бесплатное приложение для удаления фона?"
              answer="Да. В настоящее время наше приложение бесплатно для всех пользователей. 
            Вы можете немного доплатить, чтобы загрузить изображения в максимально возможном качестве (что во многих случаях необязательно). 
            В противном случае удалите его!"
            />
          </li>
          <li id="8">
            <QA
              question="Могу ли я удалить фон с логотипа с помощью этого инструмента?"
              answer="Да, но это не идеально. Наше приложение в настоящее время лучше 
            справляется с удалением фона на изображениях с центральным объектом, фокусом. 
            Изображения логотипов обычно требуют дальнейшего редактирования с помощью кисти 
            в приложении, чтобы улучшить их."
            />
          </li>
          <li id="9">
            <QA
              question="Как я могу изменить фон фотографии?"
              answer="С RemoveBG AI процесс предельно прост. 
            Перейдите на наш веб-сайт -> Нажмите Загрузить -> Загрузите изображение, 
            и наше приложение автоматически создаст для вас новое изображение с прозрачным фоном. 
            Теперь дело за вам, чтобы отредактировать его дальше."
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Questions;
