const app = require("./app") // the actual express application
const config = require("./utils/config")

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})