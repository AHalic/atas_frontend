# Front-end IndustriAll Challenge

This project was developed to solve the chalenge of implementing a frontend to a meeting summary manager. 
The design was based on a given [mockup](https://www.figma.com/file/kfO4pi7kyCRjuZQV3WMtcy/iMeets).

![App gif](public/readme.gif)

## Development

### Tools

The system was developed using:
- _Javascript_
- React
  - React-icon, React-router-dom
- Tailwind
- Axios

Ps: The system was tested on the following browsers, and can behave differently in others:
- Safari
- Chrome

## Instructions

The file [api.js](./src/services/api.js) is responsible for connecting with the API, to use it, add your API token in the `.env` file as follows
```bash
REACT_APP_API_KEY="your token"
```

Then, run the system using the commands
```
npm install
npm start
```

### Features

All features and Domain Requirements are listed in portuguese in [Readme-pt](./README-pt.md).