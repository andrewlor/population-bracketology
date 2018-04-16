let data, pool

function randomProperty(obj) {
  var keys = Object.keys(obj)
  let key = keys[ keys.length * Math.random() << 0]
  let ret = {key: key, value: obj[key]};
  delete obj[key];
  return ret;
}

function dataProcessor(catagory, size) {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest()
		xhr.onload = () => {
			let mainObj = JSON.parse(xhr.responseText)
			data = mainObj.data
			pool = Object.assign({}, data)

			let arr = []
			for (let i = 0; i < size; ++i) arr.push(randomProperty(pool))
			let arr1 = []
			for (let i = 0; i < size; i += 2) {
				let obj = {left: arr[i].key, right: arr[i+1].key}
				if (Number(arr[i].value) < Number(arr[i+1].value)) {
					obj.correct = arr[i+1].key
				} else {
					obj.correct = arr[i].key
				}
				arr1.push(obj)
			}

			while (arr1.length > 1) {
				let tempArr = []
				for (let i = 0; i < arr1.length; i += 2) {
					let obj = {left: arr1[i], right: arr1[i+1]}
					if (Number(data[arr1[i].correct]) < Number(data[arr1[i+1].correct])) {
						obj.correct = arr1[i+1].correct
					} else {
						obj.correct = arr1[i].correct
					}
					tempArr.push(obj)
				}
				arr1 = tempArr
			}
			arr1[0].metric = mainObj.metric
			resolve(arr1[0])
		}
		xhr.open('GET', 'https://s3-us-west-2.amazonaws.com/bracketology-data/' + catagory + '.json', true)
		xhr.send()
	})
}

export default dataProcessor