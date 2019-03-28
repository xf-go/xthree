module xchat-server

go 1.12

require (
	github.com/gin-contrib/sse v0.0.0-20190125020943-a7658810eb74 // indirect
	github.com/gin-gonic/gin v1.3.0
	github.com/go-sql-driver/mysql v1.4.1
	github.com/golang/protobuf v1.2.0 // indirect
	github.com/gorilla/websocket v1.4.0
	github.com/jinzhu/gorm v1.9.2
	github.com/jinzhu/inflection v0.0.0-20180308033659-04140366298a // indirect
	github.com/mattn/go-isatty v0.0.5 // indirect
	github.com/satori/go.uuid v1.2.0
	github.com/stretchr/testify v1.3.0 // indirect
	github.com/ugorji/go/codec v0.0.0-20190204201341-e444a5086c43 // indirect
	golang.org/x/crypto v0.0.0
	golang.org/x/sys v0.0.0-20190222072716-a9d3bda3a223
	gopkg.in/go-playground/validator.v8 v8.18.2 // indirect
	gopkg.in/yaml.v2 v2.2.2 // indirect

)

replace (
	golang.org/x/crypto v0.0.0 => github.com/golang/crypto v0.0.0-20190222235706-ffb98f73852f
	golang.org/x/sys v0.0.0-20190222072716-a9d3bda3a223 => github.com/golang/sys v0.0.0-20190225065934-cc5685c2db12
)
