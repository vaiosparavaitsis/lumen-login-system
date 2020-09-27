# Lumen Login System

Lumen Login System is a PHP/Angular project. The project is built based on Lumen framework.

## Installation

Use git to clone the project.

```bash
git clone https://github.com/vaiosparavaitsis/lumen-login-system.git
```

#### Docker

The project is using docker compose to run for development. For the purpose of this project I believe is better to use also the docker that I provide.

You can see instruction on how to install docker and docker-compose [here](https://docs.docker.com/compose/install/)

In the root of the project there is a folder called `docker`. Navigate to this directory and run the following commands:

```bash
docker-compose build
docker-compose up -d
```

When is done and everything is ok run the following:

```bash
docker ps
```

This will show you the status of the containers. If everything is ok all of the containers should be up and running.

This specific project has three containers one for php, nginx and mysql. You can learn more specific things about this LEMP stack, how it's built and technical details in the README inside the docker directory.

#### Composer

Run `composer install` from the root of the project.

#### Hosts

Lastly add to your `/etc/hosts` file the project as a host `127.0.0.1 lumen-login-system.local`

#### Seeders

Also you will need to add some data to the database, I already have some seeds that you can run. The credentials for the MySQL database are the following if you want to use an IDE:

```
Hostname: 127.0.0.1
Username: root
Password: root
Port: 33062
```

To load the fixture you need to navigate to the `docker` directory from a cli and run:

```bash
docker exec -it php-currency-calculator /bin/sh
```

This will let you inside the php container, then run this command:

```bash
php artisan migrate:fresh
php artisan db:seed
```

#### .env

First copy and paste the `.env.example` and rename it to `.env`

There are two new rows:

The `JWT_SECRET` which you can generate by running this command from inside the php container `php artisan jwt:secret` 

The `JWT_TTL` which is how much is the expiration time for the token and default is one minute for testing purposes

#### Npm - Angular app

Navigate to `/spa` through cli and run the following:
```bash
npm run install
npm run start
```

This will install the packages it needs to run the app and it will compile all the files for the SPA and run the server

## Usage

There are two points of entry

1) The Api `http://lumen-login-system.local:8080/`
2) The Angular app `http://localhost:4200/`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
