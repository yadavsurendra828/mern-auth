build:
	cd brown-ohaver-server && $(MAKE) build
	cd client-webapp && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down