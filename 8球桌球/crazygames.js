console.log("v1.0.1");

const isDebug = false;
const timeoutInterstitialAd = 50;
const timeoutRewardedAd = 50;
const useMockObject = false;

let isAdShown = false;
let isRewardedAdShown = false;

let _adStarted,
	_adFinished,
	_adError;

const getHasAds = function() {
	return {"initial": false, "rewarded": false, "interstitial": false};
};
const hasAds = getHasAds();

// mock object - 广告功能已禁用
let crazysdk = {
	init: function() {
		isDebug && console.log("[MOCK:JS-SDK] initializing - ads disabled");
	},
	requestAd: function(type) {
		// 广告请求已禁用，直接调用完成回调
		if(typeof _adFinished === "function") {
			_adFinished();
		}
	},
	gameplayStart: function() {
		isDebug && console.log("[MOCK:JS-SDK] gameplayStart");
	},
	gameplayStop: function() {
		isDebug && console.log("[MOCK:JS-SDK] gameplayStop");
	},
	addEventListener: function() {

	}
};

let lastAdCall = new Date();
const hasAdCooledDown = function() {

	return true;

	const adTimeInterval = isDebug ? 0 : 180;
	const lastAdCalled = Math.round((Date.now() - lastAdCall) / 1000);

	if(lastAdCalled >= adTimeInterval) {
		return true;
	} else {
		isDebug && console.log("ad cooldown: " + (adTimeInterval - lastAdCalled) + " seconds left");
		return false;
	}
}

const loadScript = function(src) {
    // return new Promise((resolve, reject) => {
    //     r = true;
    //     resolve()
    // })
	return new Promise(function(resolve, reject) {
		const s = document.createElement('script');
		let r = false;
		s.type = 'text/javascript';
		s.src = src;
		s.async = true;
		s.onerror = function(err) {
			reject(err, s);
		};
		s.onload = s.onreadystatechange = function() {
			if (!r && (!this.readyState || this.readyState == 'complete')) {
				r = true;
				resolve();
			}
		};
		const t = document.getElementsByTagName('script')[0];
		t.parentElement.insertBefore(s, t);
	});
}

const _pauseGame = function(isInternal) {
	isDebug && console.log("[CALL] pauseGame");
	window.famobi.game.pause();
};

const _resumeGame = function(isInternal) {
	isDebug && console.log("[CALL] resumeGame");
	if(isAdShown || isRewardedAdShown) {
		isDebug && console.log("[SKIP] resumeGame");
		return;
	}
	window.famobi.game.resume();
};

const _showAd = function(callback, force, isInitial) {

	isDebug && console.log("[CALL] famobi.showAd (" + (isInitial ? "initial" : "interstitial") + ")");

	let doCallback = function() {
		_adStarted = _adFinished = _adError = null;
		if(typeof callback !== "undefined") {
			callback();
		}
	}

	if(isAdShown || (!isInitial && !hasAdCooledDown()) || (isInitial ? !hasAds.initial : !hasAds.interstitial)) {
		isDebug && console.log("[SKIP] crazysdk.requestAd('midgame') (" + (isInitial ? "initial" : "interstitial") + ")");
		doCallback();
		return;
	}

	_adStarted = function() {
		isDebug && console.log("[CALL] adStarted");
		isAdShown = true;
		_pauseGame();
	};

	_adFinished = function() {
		isDebug && console.log("[CALL] adFinished");
		isAdShown = false;
		_resumeGame();
		doCallback();
	}

	_adError = function() {
		isDebug && console.log("[CALL] adError");
		isAdShown = false;
		_resumeGame();
		doCallback();
	};

	setTimeout(function() {
		isDebug && console.log("[CALL] crazysdk.requestAd('midgame')");
		crazysdk.requestAd('midgame');
	}, timeoutInterstitialAd);
};

const _hasRewardedAd = function() {
	return window.famobi.hasFeature("rewarded") && hasAds.rewarded;
};

const _rewardedAd = function(callback) {

	let result = {rewardGranted: false, adDidLoad: true, adDidShow: true};

	let doCallback = function() {
		_adStarted = _adFinished = _adError = null;
		if(typeof callback !== "undefined") {
			callback(result);
		}
	}

	if(isRewardedAdShown || !_hasRewardedAd()) {
		isDebug && console.log("[SKIP] crazysdk.requestAd('rewarded')");
		doCallback();
		return;
	}

	_adStarted = function() {
		isDebug && console.log("[CALL] adStarted");
		isRewardedAdShown = true;
		_pauseGame();
	};

	_adFinished = function() {
		isDebug && console.log("[CALL] adFinished");
		isRewardedAdShown = false;
		result.rewardGranted = true;
		_resumeGame();
		doCallback();
	}

	_adError = function() {
		isDebug && console.log("[CALL] adError");
		isRewardedAdShown = false;
		_resumeGame();
		doCallback();
	};

	setTimeout(function() {
		isDebug && console.log("[CALL] crazysdk.requestAd('rewarded')");
		crazysdk.requestAd('rewarded');
	}, timeoutRewardedAd);
};

const initSDK = function() {

	// FAMOBI_ADAPTERS
	window.famobi_adapters = {
	    "api": {
	        "created": function() {
	        	window.famobi.showAd = _showAd;
	        	window.famobi.rewardedAd = _rewardedAd;
	        	window.famobi.hasRewardedAd = _hasRewardedAd;
	        }
	    }
	};
    setTimeout(()=>{
        _loadSnippet();
    },3000)
	if(typeof _loadSnippet === "function") {
       
	}
}
initSDK()


