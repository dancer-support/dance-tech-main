build:
	docker-compose build

seed:
	cat postgres/dump.sql | docker-compose exec -T db psql -U admin -d test

dump:
	docker-compose exec db pg_dumpall -U admin > postgres/dump.sql

run:
	docker-compose up -d

clean:
	docker-compose down -v

init: build run seed
