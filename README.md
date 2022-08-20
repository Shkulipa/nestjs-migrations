#links
- https://github.com/typeorm/typeorm/issues/8810 - (thenaim for 15 Jun), he has written good package.json config with variables($name)
- https://orkhan.gitbook.io/typeorm/docs/migrations - больше о миграция и командах
- https://typeorm.io/using-cli - может быть тоже ползно о самих командах migration:command
- https://www.w3schools.com/sql/ - sql команды для написания своих миграций(например сидов)

#docker
- docker-compose.yml - настройка конфига под постгрес, запускаем docker(приложение на компе), потом в терминале пишем команду: docker-compose up -d

#typeorm migrations
commands in package.json:
- typeorm - просто нужна, так как она потом запускается в других командах
- migration:create - создает пустую миграцию куда мы можем что-то вписать
- migration:generate - создает все миграции которых нет, проходя по всем entity файлах
- migration:run - при запуске этой команде, все миграции заносятся в БД с файлов сгенеренных с помощью команды migration:generate
- migration:show - показывает просто все миграции
- migration:revert - возвращает на шаг назад, возвращает одну применную команду migration:run назад
- schema:drop - удаляет все данные и таблицы с БД

#Примеры
пример как их запускать:
пишем такие команды в консолке:
- npm run migration:generate -name=YOUR_NAME_MIGRATION
- npm run migration:create -name=YOUR_NAME_MIGRATION
- npm run migration:run
- npm run migration:revert (возвращает на 1н шаг назад)
- npm run schema:drop (просто все удаляет, БД будет пустая, но не саму БД)