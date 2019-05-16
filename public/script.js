function handleClick() {
    console.log("button click successful!")

    const input = document.getElementById("input").value;

    const url = './data?input=' + input;

    axios.get(url)
        .then (res => {
            console.log(res)
                if (res.data.length > 0) {
                    const returnedData = res.data[0].word
                    document.getElementById('results').innerHTML = returnedData + " word exists"
                } else {
                    document.getElementById('results').innerHTML = " word does not exist"
                }
        })
}