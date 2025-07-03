# Baconfy (working in progress)

Baconfy is a Laravel with InertiaJS, and React starter kit. This project uses Laravel as the PHP backend framework with InertiaJS to bridge front-end views written in React, providing a seamless single-page application (SPA) experience without the need for a traditional API.

This project uses `larastan/larastan` `laravel/pint` `peckphp/peck` `pestphp/pest` `pestphp/pest-plugin-type-coverage` `rector/rector`

## Prerequisites

Before setting up the project, ensure you have the following tools installed on your system:

- [PHP](https://www.php.net/) >= 8.4
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) >= 16.x
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Laravel](https://laravel.com/) CLI (optional but recommended)
- A database such as SQLite or PostgreSQL

---

## Installation

Follow the steps below to set up Baconfy on your local machine:

### 1. Clone the Repository

```sh
git clone https://github.com/baconfy/laravel-starter-kit.git
cd laravel-starter-kit
```

### 2. Install PHP Dependencies

Run the following command to install Laravel and its required PHP dependencies:

```sh
composer install
```

### 3. Install Node.js Dependencies

Run the following command to install JavaScript dependencies required for React and other front-end tools:

```sh
npm install
```

### 4. Set Up Environment Variables

Copy the `.env.example` file to `.env` and configure your database, application key, and other necessary environment variables. You can do this with the following command:

```sh
cp .env.example .env
```

Generate the Laravel application key:

```sh
php artisan key:generate
```

### 5. Set Up the Database

Make sure your database server is running, then create a database. Update the `DB_*` settings in your `.env` file accordingly. Once you have updated the environment variables, run the migrations:

```sh
php artisan migrate
```

For production builds, use:

```sh
npm run build
```

### 6. Start the Development Server

Finally, start the local development server by running:

```sh
composer dev
```

Access the application at [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

## Testing

To ensure the application is functioning as expected, you can run the tests included in the Laravel application:

```sh
composer test
```

You can also add front-end tests if applicable by leveraging tools like Jest or React Testing Library.

---

## Contributing

Contributions are welcome! If you'd like to contribute to Baconfy, feel free to fork the repository and submit a pull request. Please ensure your code adheres to the coding standards and is well-documented.

---

## License

Baconfy is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
