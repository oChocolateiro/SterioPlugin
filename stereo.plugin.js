//META{"name":"stereoSound"}*//

var stereoSound = function () {

	let VoiceConnection = BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection;

	class Stereo extends VoiceConnection {
		constructor(a, b, c, d, e) {
			super(a, b, c, d, e);
			this.origin = super.setTransportOptions;
		}
		setTransportOptions(obj) {
			if (obj.audioEncoder) {
				obj.audioEncoder.params = { stereo: "1" };
				obj.audioEncoder.channels = 2;
				
			}
			if (obj.fec) {
				obj.fec = false;
				

			}
			if (obj.encodingVoiceBitRate < 192000 ) {
				obj.encodingVoiceBitRate = 192000;
				
			}
			
			

			this.origin(obj);
			window.sound = this;
		}
	}

	return class _ {
		getName() { return "Stereo input" }
		getDescription() { return "Opa... Coffee aki :3. Este plugin deve ser utilizado como o Lightcord" }
		getAuthor() { return "! Coffee.#7978" }
		getVersion() { return "0.5" }

		load() { }

		start() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = Stereo;
		}

		stop() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = VoiceConnection;
		}
	};
}();