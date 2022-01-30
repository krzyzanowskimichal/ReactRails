# Rails + React CRUD App

This project was made with .

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

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You may also see any lint errors in the console.

## Main functionalities and features

The app provides functionalities such as:

- Fetching data from 3rd party API throught Rails server
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