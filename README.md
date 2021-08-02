# node-ts-clean-architecture-example

## 参考にさせていただいたもの
- [関心の分離を意識してサーバーを作ってみる(TypeScript + Express)](https://qiita.com/sadnessOjisan/items/ea5590efa3f55ef56edd)
- clean-architecture本


## 構築
### memory DB
ControllerのconstructorのuserRepositoryをmemoryディレクトリ配下のものに変更
```
$ npm install
$ npm run dev
```

### MySQL DB
ControllerのconstructorのuserRepositoryをMysQLディレクトリ配下のものに変更
```
$ npm install
$ docker-compose build
$ docker-compose up -d
$ npm run dev
```

## Request
```
# user作成
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "test", "age": 12}' localhost:3000/api/users

# user全件取得
$ curl localhost:3000/api/users

# user1件取得
$ curl localhost:3000/api/users/1

# user削除
$ curl -X DELETE localhost:3000/api/users/1
```

## Docker
```
$ docker-compose build

$ docker-compose up -d

$ docker-compose ps

# コンテナに入る
$ docker exec -it ${container名} bash

$ docker-compose down
```

コンテナー内でDatabaseを見る
```
$ mysql -u user -p

mysql> SHOW DATABASES;

mysql> USE test_database;

mysql> select * from Users;
```
