package router

import (
	// "net/http"
	"os"
	"fmt"

	"xchat-server/controller/ws"
	"xchat-server/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.New()

	r.Use(middleware.Cors())

	// setStatic(r)
	setRouter(r)

	return r
}

func setStatic(r *gin.Engine) {
	path, _ := os.Getwd()
	fmt.Println(path)
	r.Static("/public", path + "/public")
}

func setRouter(r *gin.Engine) {
	// path, _ := os.Getwd()
	// r.LoadHTMLGlob(path + "/public/*")
	// r.GET("/", func(c *gin.Context) {
	// 	c.HTML(http.StatusOK, "index.html", gin.H{

    //     })
	// })
	r.GET("/ws", ws.HandleConnections)
	go ws.HandleMessages()
	// user := r.Group("/user")
	// {
	// 	user.POST("loginByPassword", controller.LoginByPassword)
	// }
}
