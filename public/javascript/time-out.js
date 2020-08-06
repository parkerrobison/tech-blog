function idleTimer() {
    var time;

    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;
    window.onclick = resetTimer;
    window.onkeypress = resetTimer;
    window.onscroll = resetTimer;

    async function logout() {
        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

    function resetTimer () {
        clearTimeout(time)
        time = setTimeout(logout, 600000)
    }
}

idleTimer();