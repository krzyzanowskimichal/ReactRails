# Rails + React CRUD App

The purpose of the app is to display a list of items in which the user can add, edit and delete elements. The request from React should go to Rails server and then to external API.

## Install

```sh
bundle install
```

Check if json-server is installed globally or not. You can install it globally by
```sh
npm install -g json-server
```

## Usage

Run json server (for prepared 3rd party API imitation)
```sh
json-server --watch db.json --port 5000
```
Run Rails server
```sh
rails s
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The app is running in the development mode. You may see some logs in the console.

## Main functionalities and features

The app provides functionalities such as:

- Fetching data
- Adding new Items
- Editing existing items
- Deleting items

## Technologies and tools

Project is created with:

- React 17
- React Hooks
- Redux
- Redux-saga
- Styled Components
- Rest-client

## Testing

Ensure that you are in Rails folder and run 
```sh
rspec
```

## Sources

The project was made as a recruitment task (styling is only basic).