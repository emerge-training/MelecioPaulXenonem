let AppAddNoteNote = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._id = null;
	this._activity = null;
	this._description = null;
	this._timeStampAdded = null;
	this._timeStampLastUpdated = null;
};

AppAddNoteNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppAddNoteNote.prototype.constructor = AppAddNoteNote;
AppAddNoteNote.prototype._t = {
	"AppAddNoteNote" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"JkLangStringObject" : true
};
AppAddNoteNote.prototype._tobj = AppAddNoteNote;

AppAddNoteNote.NEW = function() {
	var v = new AppAddNoteNote;
	return v.CTOR_AppAddNoteNote();
};

AppAddNoteNote.prototype.CTOR_AppAddNoteNote = function() {
	this._timeStampLastUpdated = null;
	this._timeStampAdded = null;
	this._description = null;
	this._activity = null;
	this._id = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppAddNoteNote.prototype.setId = function(value) {
	this._id = value;
	return this;
};

AppAddNoteNote.prototype.getId = function() {
	return this._id;
};

AppAddNoteNote.prototype.setActivity = function(value) {
	this._activity = value;
	return this;
};

AppAddNoteNote.prototype.getActivity = function() {
	return this._activity;
};

AppAddNoteNote.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppAddNoteNote.prototype.getDescription = function() {
	return this._description;
};

AppAddNoteNote.prototype.setTimeStampAddedValue = function(value) {
	return this.setTimeStampAdded((JkLangLongInteger.asObject(value)));
};

AppAddNoteNote.prototype.getTimeStampAddedValue = function() {
	return JkLangLongInteger.asLong(this._timeStampAdded);
};

AppAddNoteNote.prototype.setTimeStampAdded = function(value) {
	this._timeStampAdded = value;
	return this;
};

AppAddNoteNote.prototype.getTimeStampAdded = function() {
	return this._timeStampAdded;
};

AppAddNoteNote.prototype.setTimeStampLastUpdatedValue = function(value) {
	return this.setTimeStampLastUpdated((JkLangLongInteger.asObject(value)));
};

AppAddNoteNote.prototype.getTimeStampLastUpdatedValue = function() {
	return JkLangLongInteger.asLong(this._timeStampLastUpdated);
};

AppAddNoteNote.prototype.setTimeStampLastUpdated = function(value) {
	this._timeStampLastUpdated = value;
	return this;
};

AppAddNoteNote.prototype.getTimeStampLastUpdated = function() {
	return this._timeStampLastUpdated;
};

AppAddNoteNote.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._id != null) {
		v.setObject("id", (this.asJsonValue(this._id)));
	}
	if(this._activity != null) {
		v.setObject("activity", (this.asJsonValue(this._activity)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	if(this._timeStampAdded != null) {
		v.setObject("timeStampAdded", (this.asJsonValue(this._timeStampAdded)));
	}
	if(this._timeStampLastUpdated != null) {
		v.setObject("timeStampLastUpdated", (this.asJsonValue(this._timeStampLastUpdated)));
	}
	return v;
};

AppAddNoteNote.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._id = v.getString("id", null);
	this._activity = v.getString("activity", null);
	this._description = v.getString("description", null);
	if(v.get("timeStampAdded") != null) {
		this._timeStampAdded = JkLangLongInteger.asObject((v.getLongInteger("timeStampAdded", 0)));
	}
	if(v.get("timeStampLastUpdated") != null) {
		this._timeStampLastUpdated = JkLangLongInteger.asObject((v.getLongInteger("timeStampLastUpdated", 0)));
	}
	return true;
};

AppAddNoteNote.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppAddNoteNote.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppAddNoteNote.prototype.toString = function() {
	return this.toJsonString();
};

AppAddNoteNote.forJsonString = function(o) {
	var v = AppAddNoteNote.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppAddNoteNote.forJsonObject = function(o) {
	var v = AppAddNoteNote.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppAddNoteNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddNoteNote"] === true;
};

let AppAddNote = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.activity = null;
	this.description = null;
};

AppAddNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppAddNote.prototype.constructor = AppAddNote;
AppAddNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"AppAddNote" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppAddNote.prototype._tobj = AppAddNote;

AppAddNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppAddNote;
	return v.CTOR_AppAddNote_JkUiGuiApplicationContext(context);
};

AppAddNote.prototype.CTOR_AppAddNote_JkUiGuiApplicationContext = function(context) {
	this.description = null;
	this.activity = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppAddNote.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var confirmbtn = JkWidgetCommonButtonWidget.forText(this.context, "Submit", (function() {
		var note = AppAddNoteNote.NEW();
		note.setActivity((this.activity.getWidgetText()));
		note.setDescription((this.description.getWidgetText()));
		AppAPIClient.getInstance().addNote((note.toDynamicMap()), (function(res1) {
			this.context.showMessageDialog("Notice", "Added Succefully", null);
			this.activity.setWidgetText("");
			this.description.setWidgetText("");
		}.bind(this)), (function(err1) {
			this.context.showMessageDialog("Notice", "Failed to add", null);
		}.bind(this)));
	}.bind(this)));
	var returnbtn = JkWidgetCommonButtonWidget.forText(this.context, "Back to Main", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppMenuNote.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	confirmbtn.setWidgetBackgroundColor((JkGfxColor.instance("#FF1493")));
	confirmbtn.setWidgetTextColor((JkGfxColor.white()));
	confirmbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	returnbtn.setWidgetBackgroundColor((JkGfxColor.instance("#C71585")));
	returnbtn.setWidgetTextColor((JkGfxColor.white()));
	returnbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(confirmbtn);
	this.vbox.addWidget(returnbtn);
};

AppAddNote.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#EBDEF0")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("ADD NOTE");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.activity = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.activity.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.activity.setWidgetPlaceholder("Input Activity");
	this.activity.setWidgetBackgroundColor((JkGfxColor.white()));
	this.activity.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.activity.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.activity);
	this.description = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.description.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.description.setWidgetPlaceholder("Input Description");
	this.description.setWidgetBackgroundColor((JkGfxColor.white()));
	this.description.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.description.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.description);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppAddNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddNote"] === true;
};

let AppAPIClient = function() {
	JkWidgetWebJSONAPIClientWithGui.call(this);
	this.widgetDefaultErrorHandler = null;
};

AppAPIClient.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetWebJSONAPIClientWithGui.prototype);
AppAPIClient.prototype.constructor = AppAPIClient;
AppAPIClient.prototype._t = {
	"JkWebJsonJSONAPIClient" : true,
	"AppAPIClient" : true,
	"JkWidgetWebJSONAPIClientWithGui" : true
};
AppAPIClient.prototype._tobj = AppAPIClient;

AppAPIClient.NEW = function() {
	var v = new AppAPIClient;
	return v.CTOR_AppAPIClient();
};

AppAPIClient.prototype.CTOR_AppAPIClient = function() {
	this.widgetDefaultErrorHandler = null;
	if(JkWidgetWebJSONAPIClientWithGui.prototype.CTOR_JkWidgetWebJSONAPIClientWithGui.call(this) == null) {
		return null;
	}
	return this;
};

AppAPIClient.getInstance = function() {
	return AppAPIClient.instance;
};

AppAPIClient.create = function(context, parentWidget) {
	if(!(context != null)) {
		return null;
	}
	AppAPIClient.instance = AppAPIClient.NEW();
	AppAPIClient.instance.setApiUrl("http://ec2-13-212-103-99.ap-southeast-1.compute.amazonaws.com:30111");
	AppAPIClient.instance.setContext(context);
	if(parentWidget != null) {
		AppAPIClient.instance.setParentWidget(parentWidget);
	}
	return AppAPIClient.instance;
};

AppAPIClient.prototype.onError1 = function(error, callback) {
	if(!(callback != null)) {
		this.onDefaultErrorHandler(error);
		return;
	}
	JkWidgetWebJSONAPIClientWithGui.prototype.onError1.call(this, error, callback);
};

AppAPIClient.prototype.onDefaultErrorHandler = function(error) {
	var context = this.getContext();
	if(!(context != null)) {
		return;
	}
	if(!(error != null)) {
		return;
	}
	if(!(this.widgetDefaultErrorHandler != null)) {
		context.showErrorDialog((error.toString()), null);
		return;
	}
	this.widgetDefaultErrorHandler(error);
};

AppAPIClient.prototype.addNote = function(data, callback, errorCallback) {
	this.doPost("/note", data, callback, errorCallback);
};

AppAPIClient.prototype.updateNote = function(id, data, callback, errorCallback) {
	this.doPut("/note/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype.deleteNote = function(id, callback, errorCallback) {
	this.doDelete("/note/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getNotes = function(callback, errorCallback) {
	this.doGet("/notes", callback, errorCallback);
};

AppAPIClient.prototype.getWidgetDefaultErrorHandler = function() {
	return this.widgetDefaultErrorHandler;
};

AppAPIClient.prototype.setWidgetDefaultErrorHandler = function(v) {
	this.widgetDefaultErrorHandler = v;
	return this;
};

AppAPIClient.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAPIClient"] === true;
};

AppAPIClient.instance = null;

let AppDeleteNoteNote = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._id = null;
	this._activity = null;
	this._description = null;
};

AppDeleteNoteNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppDeleteNoteNote.prototype.constructor = AppDeleteNoteNote;
AppDeleteNoteNote.prototype._t = {
	"JkLangStringObject" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"AppDeleteNoteNote" : true
};
AppDeleteNoteNote.prototype._tobj = AppDeleteNoteNote;

AppDeleteNoteNote.NEW = function() {
	var v = new AppDeleteNoteNote;
	return v.CTOR_AppDeleteNoteNote();
};

AppDeleteNoteNote.prototype.CTOR_AppDeleteNoteNote = function() {
	this._description = null;
	this._activity = null;
	this._id = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppDeleteNoteNote.prototype.setId = function(value) {
	this._id = value;
	return this;
};

AppDeleteNoteNote.prototype.getId = function() {
	return this._id;
};

AppDeleteNoteNote.prototype.setActivity = function(value) {
	this._activity = value;
	return this;
};

AppDeleteNoteNote.prototype.getActivity = function() {
	return this._activity;
};

AppDeleteNoteNote.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppDeleteNoteNote.prototype.getDescription = function() {
	return this._description;
};

AppDeleteNoteNote.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._id != null) {
		v.setObject("id", (this.asJsonValue(this._id)));
	}
	if(this._activity != null) {
		v.setObject("activity", (this.asJsonValue(this._activity)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	return v;
};

AppDeleteNoteNote.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._id = v.getString("id", null);
	this._activity = v.getString("activity", null);
	this._description = v.getString("description", null);
	return true;
};

AppDeleteNoteNote.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppDeleteNoteNote.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppDeleteNoteNote.prototype.toString = function() {
	return this.toJsonString();
};

AppDeleteNoteNote.forJsonString = function(o) {
	var v = AppDeleteNoteNote.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppDeleteNoteNote.forJsonObject = function(o) {
	var v = AppDeleteNoteNote.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppDeleteNoteNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppDeleteNoteNote"] === true;
};

let AppDeleteNote = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.grid = null;
	this.id = null;
};

AppDeleteNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppDeleteNote.prototype.constructor = AppDeleteNote;
AppDeleteNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppDeleteNote" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppDeleteNote.prototype._tobj = AppDeleteNote;

AppDeleteNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppDeleteNote;
	return v.CTOR_AppDeleteNote_JkUiGuiApplicationContext(context);
};

AppDeleteNote.prototype.CTOR_AppDeleteNote_JkUiGuiApplicationContext = function(context) {
	this.id = null;
	this.grid = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppDeleteNote.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	this.grid.addColumn("ID", "id", 0.2, 0);
	this.grid.addColumn("Activity", "activity", 0.5, 0);
	this.grid.addColumn("Description", "description", 0.5, 0);
	this.grid.addWidgetHeaderRow();
	AppAPIClient.getInstance().getNotes((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						this.grid.addRow([record.getString("id", null), record.getString("activity", null), record.getString("description", null)], null, null);
					}
				}
			}
		}
	}.bind(this)), null);
	var deleted = JkWidgetCommonButtonWidget.forText(this.context, "Delete", (function() {
		AppAPIClient.getInstance().deleteNote((this.id.getWidgetText()), (function(res1) {
			this.context.showMessageDialog("Notice", "Successfully Deleted", null);
			this.id.setWidgetText("");
			JkWidgetCommonNavigationWidget.switchToContainer(this, (AppDeleteNote.NEW_JkUiGuiApplicationContext(this.context)));
		}.bind(this)), (function(err1) {
			this.context.showMessageDialog("Notice", "Failed Deleted", null);
		}.bind(this)));
	}.bind(this)));
	var menu = JkWidgetCommonButtonWidget.forText(this.context, "Back to Main", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppMenuNote.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	deleted.setWidgetBackgroundColor((JkGfxColor.instance("#7D0552")));
	deleted.setWidgetTextColor((JkGfxColor.white()));
	deleted.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(deleted);
	menu.setWidgetBackgroundColor((JkGfxColor.instance("#C71585")));
	menu.setWidgetTextColor((JkGfxColor.white()));
	menu.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(menu);
};

AppDeleteNote.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#EBDEF0")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Delete Note");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("6mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.addWidget1(this.grid, 1);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("Input ID to Delete");
	this.id.setWidgetBackgroundColor((JkGfxColor.white()));
	this.id.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppDeleteNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppDeleteNote"] === true;
};

let AppMenuNote = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.create = null;
	this.read = null;
	this.update = null;
	this._delete = null;
};

AppMenuNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppMenuNote.prototype.constructor = AppMenuNote;
AppMenuNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetLayerWidget" : true,
	"AppMenuNote" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppMenuNote.prototype._tobj = AppMenuNote;

AppMenuNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppMenuNote;
	return v.CTOR_AppMenuNote_JkUiGuiApplicationContext(context);
};

AppMenuNote.prototype.CTOR_AppMenuNote_JkUiGuiApplicationContext = function(context) {
	this._delete = null;
	this.update = null;
	this.read = null;
	this.create = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppMenuNote.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
};

AppMenuNote.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#EBDEF0")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(500);
	widget3.setWidgetMarginRight(500);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.vbox.setWidgetMargin((this.context.getHeightValue("1000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Menu Note App List");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.create = JkWidgetCommonButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.create.setWidgetText("Create Note");
	this.create.setWidgetBackgroundColor((JkGfxColor.instance("#E56E94")));
	this.create.setWidgetTextColor((JkGfxColor.white()));
	this.create.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.create.setWidgetClickHandler((function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAddNote.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	this.vbox.addWidget(this.create);
	this.read = JkWidgetCommonButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.read.setWidgetText("Read Note");
	this.read.setWidgetTextColor((JkGfxColor.white()));
	this.read.setWidgetBackgroundColor((JkGfxColor.instance("#F660AB")));
	this.read.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.read.setWidgetClickHandler((function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppReadNote.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	this.vbox.addWidget(this.read);
	this.update = JkWidgetCommonButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.update.setWidgetText("Update Note");
	this.update.setWidgetTextColor((JkGfxColor.white()));
	this.update.setWidgetBackgroundColor((JkGfxColor.instance("#FC6C85")));
	this.update.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.update.setWidgetClickHandler((function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUpdateNote.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	this.vbox.addWidget(this.update);
	this._delete = JkWidgetCommonButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this._delete.setWidgetText("Delete Tasklist");
	this._delete.setWidgetTextColor((JkGfxColor.white()));
	this._delete.setWidgetBackgroundColor((JkGfxColor.instance("#7D0552")));
	this._delete.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this._delete.setWidgetClickHandler((function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppDeleteNote.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	this.vbox.addWidget(this._delete);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppMenuNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppMenuNote"] === true;
};

let AppReadNote = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.grid = null;
	this.toDashboard = null;
};

AppReadNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppReadNote.prototype.constructor = AppReadNote;
AppReadNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppReadNote" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppReadNote.prototype._tobj = AppReadNote;

AppReadNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppReadNote;
	return v.CTOR_AppReadNote_JkUiGuiApplicationContext(context);
};

AppReadNote.prototype.CTOR_AppReadNote_JkUiGuiApplicationContext = function(context) {
	this.toDashboard = null;
	this.grid = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppReadNote.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	this.grid.addColumn("ID", "id", 0.2, 0);
	this.grid.addColumn("Activity", "activity", 0.5, 0);
	this.grid.addColumn("Description", "description", 0.5, 0);
	this.grid.addWidgetHeaderRow();
	AppAPIClient.getInstance().getNotes((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						this.grid.addRow([record.getString("id", null), record.getString("activity", null), record.getString("description", null)], null, null);
					}
				}
			}
		}
	}.bind(this)), null);
};

AppReadNote.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#EBDEF0")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(100);
	widget3.setWidgetMarginRight(100);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Note List");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("8mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.addWidget1(this.grid, 1);
	this.toDashboard = JkWidgetCommonButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.toDashboard.setWidgetText("Back to Main");
	this.toDashboard.setWidgetTextColor((JkGfxColor.white()));
	this.toDashboard.setWidgetBackgroundColor((JkGfxColor.instance("#C71585")));
	this.toDashboard.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.toDashboard.setWidgetClickHandler((function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppMenuNote.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	this.vbox.addWidget(this.toDashboard);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppReadNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppReadNote"] === true;
};

let AppMainScreen = function() {
	JkWidgetScreenForWidget.call(this);
	this.navi = null;
};

AppMainScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppMainScreen.prototype.constructor = AppMainScreen;
AppMainScreen.prototype._t = {
	"JkUiScreen" : true,
	"JkUiScreenWithContext" : true,
	"AppMainScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppMainScreen.prototype._tobj = AppMainScreen;

AppMainScreen.NEW = function() {
	var v = new AppMainScreen;
	return v.CTOR_AppMainScreen();
};

AppMainScreen.prototype.CTOR_AppMainScreen = function() {
	this.navi = null;
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppMainScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.navi = JkWidgetCommonNavigationWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.navi.setWidgetEnableActionBar(false);
	this.setWidget(this.navi);
	AppAPIClient.create(this.context, this.navi);
	this.navi.pushWidget((AppMenuNote.NEW_JkUiGuiApplicationContext(this.context)));
};

AppMainScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = [];
	context.prepareResources(resources, (function() {
		var main = AppMainScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppMainScreen.main();

AppMainScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppMainScreen"] === true;
};

let AppNotelist = function() {
	JkWidgetLayerWidget.call(this);
	this.container = null;
	this.list = null;
};

AppNotelist.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppNotelist.prototype.constructor = AppNotelist;
AppNotelist.prototype._t = {
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetWidgetWithLayout" : true,
	"JkWidgetTitledWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"AppNotelist" : true
};
AppNotelist.prototype._tobj = AppNotelist;

AppNotelist.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppNotelist;
	return v.CTOR_AppNotelist_JkUiGuiApplicationContext(context);
};

AppNotelist.prototype.CTOR_AppNotelist_JkUiGuiApplicationContext = function(context) {
	this.list = null;
	this.container = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppNotelist.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	AppAPIClient.getInstance().getNotes((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
			this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, (JkWidgetLabelWidget.forText(this.context, "No record")), 0.5, 0.5, 0)), 1.0);
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						var note = (JkLangString.safeString((record.getString("id", null)))) + (" - ") + (JkLangString.safeString((record.getString("activity", null)))) + (" - ") + (JkLangString.safeString((record.getString("description", null))));
						var lblTask = JkWidgetLabelWidget.forText(this.context, note);
						var hbox = JkWidgetHorizontalBoxWidget.forContext(this.context, 0, (this.context.getHeightValue("0.5mm")));
						hbox.addWidget(lblTask);
						this.list.addWidget1((JkWidgetAlignWidget.forWidget(this.context, hbox, 0.5, 0.5, 0)), 1.0);
					}
				}
			}
		}
	}.bind(this)), null);
};

AppNotelist.prototype.getWidgetTitle = function() {
	return "NoteListApp";
};

AppNotelist.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.white()));
	this.list = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.list.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.list.setWidgetSpacing((this.context.getHeightValue("5mm")));
	this.container.addWidget(this.list);
	widget.addWidget(this.container);
	this.addWidget(widget);
};

AppNotelist.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppNotelist"] === true;
};

let AppUpdateNoteNote = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._id = null;
	this._activity = null;
	this._description = null;
};

AppUpdateNoteNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppUpdateNoteNote.prototype.constructor = AppUpdateNoteNote;
AppUpdateNoteNote.prototype._t = {
	"JkLangStringObject" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"AppUpdateNoteNote" : true
};
AppUpdateNoteNote.prototype._tobj = AppUpdateNoteNote;

AppUpdateNoteNote.NEW = function() {
	var v = new AppUpdateNoteNote;
	return v.CTOR_AppUpdateNoteNote();
};

AppUpdateNoteNote.prototype.CTOR_AppUpdateNoteNote = function() {
	this._description = null;
	this._activity = null;
	this._id = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppUpdateNoteNote.prototype.setId = function(value) {
	this._id = value;
	return this;
};

AppUpdateNoteNote.prototype.getId = function() {
	return this._id;
};

AppUpdateNoteNote.prototype.setActivity = function(value) {
	this._activity = value;
	return this;
};

AppUpdateNoteNote.prototype.getActivity = function() {
	return this._activity;
};

AppUpdateNoteNote.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppUpdateNoteNote.prototype.getDescription = function() {
	return this._description;
};

AppUpdateNoteNote.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._id != null) {
		v.setObject("id", (this.asJsonValue(this._id)));
	}
	if(this._activity != null) {
		v.setObject("activity", (this.asJsonValue(this._activity)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	return v;
};

AppUpdateNoteNote.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._id = v.getString("id", null);
	this._activity = v.getString("activity", null);
	this._description = v.getString("description", null);
	return true;
};

AppUpdateNoteNote.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppUpdateNoteNote.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppUpdateNoteNote.prototype.toString = function() {
	return this.toJsonString();
};

AppUpdateNoteNote.forJsonString = function(o) {
	var v = AppUpdateNoteNote.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppUpdateNoteNote.forJsonObject = function(o) {
	var v = AppUpdateNoteNote.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppUpdateNoteNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUpdateNoteNote"] === true;
};

let AppUpdateNote = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.grid = null;
	this.id = null;
	this.activity = null;
	this.description = null;
};

AppUpdateNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppUpdateNote.prototype.constructor = AppUpdateNote;
AppUpdateNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"AppUpdateNote" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppUpdateNote.prototype._tobj = AppUpdateNote;

AppUpdateNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppUpdateNote;
	return v.CTOR_AppUpdateNote_JkUiGuiApplicationContext(context);
};

AppUpdateNote.prototype.CTOR_AppUpdateNote_JkUiGuiApplicationContext = function(context) {
	this.description = null;
	this.activity = null;
	this.id = null;
	this.grid = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppUpdateNote.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	this.grid.addColumn("ID", "id", 0.2, 0);
	this.grid.addColumn("Activity", "activity", 0.5, 0);
	this.grid.addColumn("Description", "description", 0.5, 0);
	this.grid.addWidgetHeaderRow();
	AppAPIClient.getInstance().getNotes((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						this.grid.addRow([record.getString("id", null), record.getString("activity", null), record.getString("description", null)], null, null);
					}
				}
			}
		}
	}.bind(this)), null);
	var searchbtn = JkWidgetCommonButtonWidget.forText(this.context, "Search", (function() {
		AppAPIClient.getInstance().getNotes((function(response3) {
			var data1 = response3.getDynamicMap("data");
			if(!(data1 != null)) {
				return;
			}
			var records1 = data1.getDynamicVector("records");
			if(!(records1 != null) || records1.getSize() < 1) {
				;
			}
			else {
				var array1 = records1.toVector();
				if(array1 != null) {
					var n1 = 0;
					var m1 = array1.length;
					for(n1 = 0 ; n1 < m1 ; n1++) {
						var record1 = (function(o1) {
							if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o1)) {
								return o1;
							}
							return null;
						}.bind(this))(array1[n1]);
						if(record1 != null) {
							if(this.id.getWidgetText() == record1.getInteger("id", 0)) {
								this.activity.setWidgetText((record1.getString("activity", null)));
								this.description.setWidgetText((record1.getString("description", null)));
							}
						}
					}
				}
			}
		}.bind(this)), null);
	}.bind(this)));
	var updated = JkWidgetCommonButtonWidget.forText(this.context, "Update", (function() {
		var note = AppUpdateNoteNote.NEW();
		note.setActivity((this.activity.getWidgetText()));
		note.setDescription((this.description.getWidgetText()));
		AppAPIClient.getInstance().updateNote((this.id.getWidgetText()), (note.toDynamicMap()), (function(res1) {
			this.context.showMessageDialog("Notice", "Successfully Updated", null);
			this.id.setWidgetText("");
			this.activity.setWidgetText("");
			this.description.setWidgetText("");
			JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUpdateNote.NEW_JkUiGuiApplicationContext(this.context)));
		}.bind(this)), (function(err1) {
			this.context.showMessageDialog("Notice", "Failed Update", null);
		}.bind(this)));
	}.bind(this)));
	var menu = JkWidgetCommonButtonWidget.forText(this.context, "Back to Main", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppMenuNote.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	searchbtn.setWidgetBackgroundColor((JkGfxColor.instance("#FC6C85")));
	searchbtn.setWidgetTextColor((JkGfxColor.white()));
	searchbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(searchbtn);
	updated.setWidgetBackgroundColor((JkGfxColor.instance("#F6358A")));
	updated.setWidgetTextColor((JkGfxColor.white()));
	updated.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(updated);
	menu.setWidgetBackgroundColor((JkGfxColor.instance("#C71585")));
	menu.setWidgetTextColor((JkGfxColor.white()));
	menu.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(menu);
};

AppUpdateNote.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#EBDEF0")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Update Note");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("6mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.addWidget1(this.grid, 1);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("Input ID to Search and Display");
	this.id.setWidgetBackgroundColor((JkGfxColor.white()));
	this.id.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	this.activity = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.activity.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.activity.setWidgetPlaceholder("Activity");
	this.activity.setWidgetBackgroundColor((JkGfxColor.white()));
	this.activity.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.activity.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.activity);
	this.description = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.description.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.description.setWidgetPlaceholder("Description");
	this.description.setWidgetBackgroundColor((JkGfxColor.white()));
	this.description.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.description.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.description);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppUpdateNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUpdateNote"] === true;
};
