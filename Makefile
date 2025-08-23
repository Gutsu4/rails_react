# ---------
# Makefile for Rails + React + Docker dev env
# ---------

# Variables
COMPOSE = docker-compose

# Backend (Rails) commands
setup:
	$(COMPOSE) run --rm backend bundle install
	$(COMPOSE) run --rm backend rails db:create db:migrate

build:
	$(COMPOSE) build --no-cache

up:
	$(COMPOSE) up -d

down:
	$(COMPOSE) down --remove-orphans

restart:
	$(MAKE) down
	$(MAKE) build
	$(MAKE) up

backend-bash:
	$(COMPOSE) run --rm backend bash

# Frontend (Vite) commands
frontend-bash:
	$(COMPOSE) run --rm frontend bash

logs:
	$(COMPOSE) logs -f

# DB console
db-console:
	$(COMPOSE) run --rm backend rails dbconsole

# Rails console
console:
	$(COMPOSE) run --rm backend rails console

# Clean up volumes & images (careful!)
prune:
	$(COMPOSE) down --volumes --remove-orphans
	docker system prune -f

app:
	docker compose exec backend bash