function SocketReader(e){var t=this;if(!(t instanceof SocketReader))throw new Error("SocketReader must be called as constructor.");if(e.type!=="Socket"||!e.Socket)throw new Error("Non-socket type "+e.type);Reader.call(t,e)}module.exports=SocketReader;var fs=require("../../graceful-fs/graceful-fs.js"),fstream=require("../fstream.js"),inherits=require("../../inherits/inherits.js"),mkdir=require("../../mkdirp"),Reader=require("./reader.js");inherits(SocketReader,Reader),SocketReader.prototype._read=function(){var e=this;if(e._paused)return;e._ended||(e.emit("end"),e.emit("close"),e._ended=!0)};