var EVENT_TITLE = "三鷹プログラマーズカフェΖ";

document.getElementById('event_title').value = '[第141回]'+EVENT_TITLE+'[04/26]';
document.getElementById('event_catch').value = 'プログラミングの人たちが集まる会';
document.getElementById('event_description').value = 'ＬＴ、ワークショップ、フリー(雑談)、もくもく会 入退出自由ですが特に初めての方などは参加申し込みをお願いします。毎回だいたいAtnd＋５～６人います。\r１時から会場に入れます。３時から６時までがコアタイムです。初めての方がいる場合は４時ごろに自己紹介をまわします。\r\r有志開催の夕方～夜の部もあります。\r\r※2012年4月よりコワーキングスペースでの開催と場所が移動となりました。\r場所がわかりにくいですのでご注意ください。三鷹産業プラザ　向かい側の建物の１Ｆにホームセンターが入った建物の３Ｆです。１階のホームセンターのお店の正面の右側に階段があります。\r三鷹産業プラザアネックス アクセス（http://www.mitaka.ne.jp/business/annex/access.html）です。コワーキングスペースはまだクローズドβの状態で正式オープンではないので案内等もでておりません。\r建物の裏側からも表側のからも階段がありますが、２Ｆから入って建物の中を抜けて表側の階段にまわる必要があります。駅前通り側から入るのがわかりやすいです。\r\rもしわからなければ、近くのカフェの人に聞くと道が開かれるかもしれません……。';
document.getElementById('started_at_time').value = '15:00'
document.getElementById('ended_at_time').value = '18:00'
document.getElementById('event_place').value = 'ライフ イン 名取屋3F コワーキングプロジェクト ミタカフェ';
document.getElementById('event_address').value = '東京都三鷹市下連雀3-32-3';
document.getElementById('event_url').value = 'http://pgcafe.net/'
document.getElementById('started_at').value = '2012-04-26'
document.getElementById('ended_at').value = '2012-04-26'
document.getElementById('event_limit').value = '20'
document.getElementById('event_recommended_twitter_account').value = 'pgcafe'
document.getElementById('event_hash_tag').value = 'pgcafe'
var DOC_DOM = "ui-datepicker-div"; //


function fetchAtndFeed(callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var doms = parseHTML(xhr.responseText);
        callback(doms);
      } else {
        callback(null);
      }
    }
  }
  var url = 'http://kuippa.s188.xrea.com/pgcafeatnd/';
  xhr.open('GET', url, true);
  xhr.send();
};

function onText(data) {
	var l = data.getElementsByTagName("a");
	var i = 0; 
	while (i < l.length) {
		if (l[i].href.match(/^http:\/\/atnd\.org/i)) {
			if (setDocs(l[i].text)){
//				break;
			}
			if (i > 4){
				break;
			}
		}
		i++;
	}
};

var maxnum = 0;
function setDocs(latestEvent) {
	var match = latestEvent.match(/^\[第(\d+)回\].+\[(\d+)\/(\d+)\]/);
	if (match == undefined ) {
		return false;
	}
	var num = match[1];
	var month = match[2];
	var day = match[3];

	if (maxnum>num) {
		return false;
	}
	maxnum = num;
	var d = new Date()
	var year = d.getFullYear();
	d.setTime(new Date(year, parseInt(month) - 1, parseInt(day)).getTime() + 3600 * 24 * 7 * 1000);
	document.getElementById('event_title').value = '[第' + (parseInt(num) + 1) + '回]'+EVENT_TITLE+'[' + (d.getMonth() + 1) + '/' + d.getDate() + ']';

	var setdates = year+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2);
	document.getElementById('started_at').value = setdates;
	document.getElementById('ended_at').value = setdates;

	return true;
};


function parseHTML(str) {
	var doms = document.getElementById(DOC_DOM);
	doms.innerHTML = str;
	return doms;
};

fetchAtndFeed(onText);


