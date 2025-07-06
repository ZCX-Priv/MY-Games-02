window.famobi_analytics = window.famobi_analytics || {};
window.famobi_tracking = window.famobi_tracking || {
	init: function() {},
	trackEvent: function() {},
	EVENTS: {
	    'LEVEL_START'	: 'event/level/start',
	    'LEVEL_END'		: 'event/level/end',
	    'LEVEL_UPDATE'	: 'event/level/update',
	    'PING'          : 'event/ping',
	    'AD'			: 'event/ad'
	}
};

window.famobi_analytics.trackEvent = function(event, params) {

	params = params || {};

	return new Promise(function(resolve, reject) {
		console.log(event, params);

		// ANALYTICS - 广告相关代码已移除
		switch(event) {
			case "EVENT_LEVELSUCCESS":
			case "EVENT_LEVELFAIL":
				// 移除广告展示，直接resolve
				return resolve();

			case "EVENT_LEVELRESTART":
			case "EVENT_LEVELSTART":
				// 移除crazysdk相关调用
				break;

			case "EVENT_PAUSE":
				// 移除crazysdk相关调用
				break;

			case "EVENT_RESUME":
				// 移除crazysdk相关调用
				break;

			default:
				// nothing to do
		}
		return resolve(event, params);
	});
}
