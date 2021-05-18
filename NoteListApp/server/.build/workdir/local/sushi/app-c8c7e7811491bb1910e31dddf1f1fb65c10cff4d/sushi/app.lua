app = app or {}

app.NotelistDatabase = {}
app.NotelistDatabase.__index = app.NotelistDatabase
_vm:set_metatable(app.NotelistDatabase, {})

app.NotelistDatabase.NOTE = "note"

function app.NotelistDatabase._create()
	local v = _vm:set_metatable({}, app.NotelistDatabase)
	return v
end

function app.NotelistDatabase:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NotelistDatabase'
	self['_isType.app.NotelistDatabase'] = true
	self.db = nil
end

function app.NotelistDatabase:_construct0()
	app.NotelistDatabase._init(self)
	return self
end

app.NotelistDatabase.Note = _g.jk.json.JSONObjectAdapter._create()
app.NotelistDatabase.Note.__index = app.NotelistDatabase.Note
_vm:set_metatable(app.NotelistDatabase.Note, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.NotelistDatabase.Note._create()
	local v = _vm:set_metatable({}, app.NotelistDatabase.Note)
	return v
end

function app.NotelistDatabase.Note:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NotelistDatabase.Note'
	self['_isType.app.NotelistDatabase.Note'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._id = nil
	self._activity = nil
	self._description = nil
	self._timeStampAdded = nil
	self._timeStampLastUpdated = nil
end

function app.NotelistDatabase.Note:_construct0()
	app.NotelistDatabase.Note._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.NotelistDatabase.Note:setIdValue(value)
	do return self:setId(_g.jk.lang.Integer:asObject(value)) end
end

function app.NotelistDatabase.Note:getIdValue()
	do return _g.jk.lang.Integer:asInteger(self._id) end
end

function app.NotelistDatabase.Note:setId(value)
	self._id = value
	do return self end
end

function app.NotelistDatabase.Note:getId()
	do return self._id end
end

function app.NotelistDatabase.Note:setActivity(value)
	self._activity = value
	do return self end
end

function app.NotelistDatabase.Note:getActivity()
	do return self._activity end
end

function app.NotelistDatabase.Note:setDescription(value)
	self._description = value
	do return self end
end

function app.NotelistDatabase.Note:getDescription()
	do return self._description end
end

function app.NotelistDatabase.Note:setTimeStampAddedValue(value)
	do return self:setTimeStampAdded(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.NotelistDatabase.Note:getTimeStampAddedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampAdded) end
end

function app.NotelistDatabase.Note:setTimeStampAdded(value)
	self._timeStampAdded = value
	do return self end
end

function app.NotelistDatabase.Note:getTimeStampAdded()
	do return self._timeStampAdded end
end

function app.NotelistDatabase.Note:setTimeStampLastUpdatedValue(value)
	do return self:setTimeStampLastUpdated(_g.jk.lang.LongInteger:asObject(value)) end
end

function app.NotelistDatabase.Note:getTimeStampLastUpdatedValue()
	do return _g.jk.lang.LongInteger:asLong(self._timeStampLastUpdated) end
end

function app.NotelistDatabase.Note:setTimeStampLastUpdated(value)
	self._timeStampLastUpdated = value
	do return self end
end

function app.NotelistDatabase.Note:getTimeStampLastUpdated()
	do return self._timeStampLastUpdated end
end

function app.NotelistDatabase.Note:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._id ~= nil then
		do v:setObject("id", self:asJsonValue(self._id)) end
	end
	if self._activity ~= nil then
		do v:setObject("activity", self:asJsonValue(self._activity)) end
	end
	if self._description ~= nil then
		do v:setObject("description", self:asJsonValue(self._description)) end
	end
	if self._timeStampAdded ~= nil then
		do v:setObject("timeStampAdded", self:asJsonValue(self._timeStampAdded)) end
	end
	if self._timeStampLastUpdated ~= nil then
		do v:setObject("timeStampLastUpdated", self:asJsonValue(self._timeStampLastUpdated)) end
	end
	do return v end
end

function app.NotelistDatabase.Note:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	if v:get("id") ~= nil then
		self._id = _g.jk.lang.Integer:asObject(v:getInteger("id", 0))
	end
	self._activity = v:getString("activity", nil)
	self._description = v:getString("description", nil)
	if v:get("timeStampAdded") ~= nil then
		self._timeStampAdded = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampAdded", 0))
	end
	if v:get("timeStampLastUpdated") ~= nil then
		self._timeStampLastUpdated = _g.jk.lang.LongInteger:asObject(v:getLongInteger("timeStampLastUpdated", 0))
	end
	do return true end
end

function app.NotelistDatabase.Note:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.NotelistDatabase.Note:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.NotelistDatabase.Note:toString()
	do return self:toJsonString() end
end

function app.NotelistDatabase.Note:forJsonString(o)
	local v = _g.app.NotelistDatabase.Note._construct0(_g.app.NotelistDatabase.Note._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.NotelistDatabase.Note:forJsonObject(o)
	local v = _g.app.NotelistDatabase.Note._construct0(_g.app.NotelistDatabase.Note._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.NotelistDatabase:forContext(ctx)
	local cstr = _g.jk.env.EnvironmentVariable:get("NOTE_DATABASE")
	do _g.jk.log.Log:debug(ctx, "Opening database connection: '" .. _g.jk.lang.String:safeString(cstr) .. "'") end
	self.db = _g.jk.mysql.MySQLDatabase:forConnectionStringSync(ctx, cstr)
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("failedToConnectToDatabase", cstr) end
	end
	do
		local v = _g.app.NotelistDatabase._construct0(_g.app.NotelistDatabase._create())
		do v:setDb(self.db) end
		do return v end
	end
end

function app.NotelistDatabase:updateTable(table)
	if not (table ~= nil) then
		do _g.jk.lang.Error:throw("nullTabel", "updateTable") end
	end
	if not (self.db ~= nil) then
		do _g.jk.lang.Error:throw("nullTable", "updateTable") end
	end
	if not self.db:ensureTableExistsSync(table) then
		do _g.jk.lang.Error:throw("failedToUpdateTable", table:getName()) end
	end
end

function app.NotelistDatabase:updateTables()
	local note = _g.jk.sql.SQLTableInfo:forName(_g.app.NotelistDatabase.NOTE)
	do note:addIntegerKeyColumn("id") end
	do note:addStringColumn("activity") end
	do note:addStringColumn("description") end
	do note:addLongColumn("timeStampAdded") end
	do note:addLongColumn("timeStampLastUpdated") end
	do self:updateTable(note) end
end

function app.NotelistDatabase:addNote(note)
	if not (note ~= nil) then
		do return nil end
	end
	do note:setTimeStampAddedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	if not self.db:executeSync(self.db:prepareInsertStatementSync(_g.app.NotelistDatabase.NOTE, note:toDynamicMap())) then
		do return nil end
	end
	do return note end
end

function app.NotelistDatabase:updateNote(id, note)
	if not (note ~= nil) then
		do return false end
	end
	do note:setTimeStampLastUpdatedValue(_g.jk.time.SystemClock:asUTCSeconds()) end
	do
		local criteria = _g.app.NotelistDatabase.Note._construct0(_g.app.NotelistDatabase.Note._create())
		do criteria:setIdValue(_g.jk.lang.String:toInteger(id)) end
		do return self.db:executeSync(self.db:prepareUpdateStatementSync(_g.app.NotelistDatabase.NOTE, criteria:toDynamicMap(), note:toDynamicMap())) end
	end
end

function app.NotelistDatabase:deleteNote(id)
	local criteria = _g.app.NotelistDatabase.Note._construct0(_g.app.NotelistDatabase.Note._create())
	do criteria:setIdValue(_g.jk.lang.String:toInteger(id)) end
	do return self.db:executeSync(self.db:prepareDeleteStatementSync(_g.app.NotelistDatabase.NOTE, criteria:toDynamicMap())) end
end

function app.NotelistDatabase:getNotes()
	local v = {}
	local it = self.db:querySync(self.db:prepareQueryAllStatementSync(_g.app.NotelistDatabase.NOTE, nil, nil))
	if not (it ~= nil) then
		do return nil end
	end
	while it ~= nil do
		local o = it:next()
		if not (o ~= nil) then
			do break end
		end
		do
			local note = _g.app.NotelistDatabase.Note:forJsonObject(o)
			if not (note ~= nil) then
				goto _continue1
			end
			do _g.jk.lang.Vector:append(v, note) end
		end
		::_continue1::
	end
	do
		local data = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
		do data:setObject("records", v) end
		do return data end
	end
end

function app.NotelistDatabase:close()
	if self.db ~= nil then
		do self.db:closeSync() end
	end
	self.db = nil
end

function app.NotelistDatabase:getDb()
	do return self.db end
end

function app.NotelistDatabase:setDb(v)
	self.db = v
	do return self end
end

app.NotelistApiHandler = _g.jk.http.worker.HTTPRPCRouter._create()
app.NotelistApiHandler.__index = app.NotelistApiHandler
_vm:set_metatable(app.NotelistApiHandler, {
	__index = _g.jk.http.worker.HTTPRPCRouter
})

function app.NotelistApiHandler._create()
	local v = _vm:set_metatable({}, app.NotelistApiHandler)
	return v
end

function app.NotelistApiHandler:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NotelistApiHandler'
	self['_isType.app.NotelistApiHandler'] = true
	self.db = nil
	self.cors = _g.app.NotelistConfig:getCorsUtil()
end

function app.NotelistApiHandler:_construct0()
	app.NotelistApiHandler._init(self)
	do _g.jk.http.worker.HTTPRPCRouter._construct0(self) end
	return self
end

app.NotelistApiHandler.NoteRequest = _g.jk.json.JSONObjectAdapter._create()
app.NotelistApiHandler.NoteRequest.__index = app.NotelistApiHandler.NoteRequest
_vm:set_metatable(app.NotelistApiHandler.NoteRequest, {
	__index = _g.jk.json.JSONObjectAdapter
})

function app.NotelistApiHandler.NoteRequest._create()
	local v = _vm:set_metatable({}, app.NotelistApiHandler.NoteRequest)
	return v
end

function app.NotelistApiHandler.NoteRequest:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NotelistApiHandler.NoteRequest'
	self['_isType.app.NotelistApiHandler.NoteRequest'] = true
	self['_isType.jk.lang.StringObject'] = true
	self._activity = nil
	self._description = nil
end

function app.NotelistApiHandler.NoteRequest:_construct0()
	app.NotelistApiHandler.NoteRequest._init(self)
	do _g.jk.json.JSONObjectAdapter._construct0(self) end
	return self
end

function app.NotelistApiHandler.NoteRequest:setActivity(value)
	self._activity = value
	do return self end
end

function app.NotelistApiHandler.NoteRequest:getActivity()
	do return self._activity end
end

function app.NotelistApiHandler.NoteRequest:setDescription(value)
	self._description = value
	do return self end
end

function app.NotelistApiHandler.NoteRequest:getDescription()
	do return self._description end
end

function app.NotelistApiHandler.NoteRequest:toJsonObject()
	local v = _g.jk.lang.DynamicMap._construct0(_g.jk.lang.DynamicMap._create())
	if self._activity ~= nil then
		do v:setObject("activity", self:asJsonValue(self._activity)) end
	end
	if self._description ~= nil then
		do v:setObject("description", self:asJsonValue(self._description)) end
	end
	do return v end
end

function app.NotelistApiHandler.NoteRequest:fromJsonObject(o)
	local v = _vm:to_table_with_key(o, '_isType.jk.lang.DynamicMap')
	if not (v ~= nil) then
		do return false end
	end
	self._activity = v:getString("activity", nil)
	self._description = v:getString("description", nil)
	do return true end
end

function app.NotelistApiHandler.NoteRequest:fromJsonString(o)
	do return self:fromJsonObject(_g.jk.json.JSONParser:parse(o)) end
end

function app.NotelistApiHandler.NoteRequest:toJsonString()
	do return _g.jk.json.JSONEncoder:encode(self:toJsonObject(), true, false) end
end

function app.NotelistApiHandler.NoteRequest:toString()
	do return self:toJsonString() end
end

function app.NotelistApiHandler.NoteRequest:forJsonString(o)
	local v = _g.app.NotelistApiHandler.NoteRequest._construct0(_g.app.NotelistApiHandler.NoteRequest._create())
	if not v:fromJsonString(o) then
		do return nil end
	end
	do return v end
end

function app.NotelistApiHandler.NoteRequest:forJsonObject(o)
	local v = _g.app.NotelistApiHandler.NoteRequest._construct0(_g.app.NotelistApiHandler.NoteRequest._create())
	if not v:fromJsonObject(o) then
		do return nil end
	end
	do return v end
end

function app.NotelistApiHandler:getDatabase()
	if not (self.db ~= nil) then
		self.db = _g.app.NotelistDatabase:forContext(self:getCtx())
		do self.db:updateTables() end
	end
	do return self.db end
end

function app.NotelistApiHandler:postProcess(req, resp)
	do self.cors:handleWorkerRequest(req, resp) end
end

function app.NotelistApiHandler:initRoutes()
	do _g.jk.http.worker.HTTPRPCRouter.initRoutes(self) end
	do self:addRoute("GET", "/notes", function(req, resp, vars)
		local notes = self:getDatabase():getNotes()
		if not (notes ~= nil) then
			do return end
		end
		do self:setOkResponse(resp, notes) end
	end) end
	do self:addRoute("POST", "/note", function(req, resp, vars)
		local requestData = _g.app.NotelistApiHandler.NoteRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local note = _g.app.NotelistDatabase.Note._construct0(_g.app.NotelistDatabase.Note._create())
			do note:setActivity(requestData:getActivity()) end
			do note:setDescription(requestData:getDescription()) end
			if not (self:getDatabase():addNote(note) ~= nil) then
				do self:setErrorResponse(resp, "failedToSaveNote", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("PUT", "/note/:id", function(req, resp, vars)
		local requestData = _g.app.NotelistApiHandler.NoteRequest:forJsonString(req:getBodyString())
		if not (requestData ~= nil) then
			do self:setErrorResponse(resp, "invalidRequest", "500") end
			do return end
		end
		do
			local note = _g.app.NotelistDatabase.Note._construct0(_g.app.NotelistDatabase.Note._create())
			do note:setActivity(requestData:getActivity()) end
			do note:setDescription(requestData:getDescription()) end
			if not self:getDatabase():updateNote(vars:getString("id", nil), note) then
				do self:setErrorResponse(resp, "failedToUpdateNote", "500") end
				do return end
			end
			do self:setOkResponse(resp, nil) end
		end
	end) end
	do self:addRoute("DELETE", "/note/:id", function(req, resp, vars)
		if not self:getDatabase():deleteNote(vars:getString("id", nil)) then
			do self:setErrorResponse(resp, "failedToDeleteNote", "500") end
			do return end
		end
		do self:setOkResponse(resp, nil) end
	end) end
end

app.NotelistConfig = {}
app.NotelistConfig.__index = app.NotelistConfig
_vm:set_metatable(app.NotelistConfig, {})

function app.NotelistConfig._create()
	local v = _vm:set_metatable({}, app.NotelistConfig)
	return v
end

function app.NotelistConfig:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NotelistConfig'
	self['_isType.app.NotelistConfig'] = true
end

function app.NotelistConfig:_construct0()
	app.NotelistConfig._init(self)
	return self
end

function app.NotelistConfig:getAllowedOrigins()
	do return {
		"http://localhost:8080",
		"http://localhost:8081",
		"http://ec2-13-212-103-99.ap-southeast-1.compute.amazonaws.com:30122"
	} end
end

function app.NotelistConfig:getCorsUtil()
	local allowed = {}
	local array = self:getAllowedOrigins()
	if array ~= nil then
		local n = 0
		local m = #array
		do
			n = 0
			while n < m do
				local origin = array[n + 1]
				if origin ~= nil then
					do _g.jk.lang.Vector:append(allowed, _g.jk.lang.String:asString(origin)) end
				end
				do n = n + 1 end
			end
		end
	end
	do return _g.jk.http.server.cors.HTTPServerCORSUtil:forWhitelist(allowed) end
end

app.NotelistApiServer = _g.jk.server.web.WebServer._create()
app.NotelistApiServer.__index = app.NotelistApiServer
_vm:set_metatable(app.NotelistApiServer, {
	__index = _g.jk.server.web.WebServer
})

function app.NotelistApiServer._create()
	local v = _vm:set_metatable({}, app.NotelistApiServer)
	return v
end

function app.NotelistApiServer:_init()
	self._isClassInstance = true
	self._qualifiedClassName = self._qualifiedClassName or 'app.NotelistApiServer'
	self['_isType.app.NotelistApiServer'] = true
end

function app.NotelistApiServer:_construct0()
	app.NotelistApiServer._init(self)
	do _g.jk.server.web.WebServer._construct0(self) end
	return self
end

function app.NotelistApiServer:initializeServer(server)
	if not _g.jk.server.web.WebServer.initializeServer(self, server) then
		do return false end
	end
	do server:setCreateOptionsResponseHandler(function(req)
		do return _g.app.NotelistConfig:getCorsUtil():handlePreflightRequest(req) end
	end) end
	do return true end
end

function app.NotelistApiServer:initializeApplication()
	if not _g.jk.server.web.WebServer.initializeApplication(self) then
		do return false end
	end
	do
		local db = _g.app.NotelistDatabase:forContext(self.ctx)
		do db:updateTables() end
		do db:close() end
		do return true end
	end
end

function app.NotelistApiServer:_main(args)
	do return _g.app.NotelistApiServer._construct0(_g.app.NotelistApiServer._create()):setWorker("class:app.NotelistApiHandler"):executeMain(args) end
end

function _main(args)
	do return app.NotelistApiServer:_main(args) end
end
