// const repo = 'xx025.github.io'; // GitHub仓库名称
// const owner = repo.split('.')[0]; // GitHub仓库所有者名称
//
//
// const static_path = [
//     {'path': 'YanX', 'info2': '研招网专业目录下载工具'},
//     {'path': 'carrot', 'info2': '免费ChatGPT 镜像站大全'},
// ]
//
//
// const url = `https://api.github.com/repos/${owner}/${repo}/contents?ref=main`
//
//
// // 构造GitHub API URL
// const app = Vue.createApp({
//     data() {
//         return {
//             owner: owner,
//             repo: repo,
//             files: [],
//         }
//     },
//     async mounted() {
//         try {
//             const response = await axios.get(url);
//
//
//             const files = response.data.filter(file => file.type.includes('dir') && !file.path.startsWith('.'));
//             for (const file of files) {
//                 try {
//                     const response = await axios.get(file.url);
//                     const datum = response.data.find(data => data.name.startsWith('info.'));
//                     if (datum) {
//                         file.info2 = datum.name.split('info.')[1];
//                     }
//                 } catch (error) {
//                 }
//             }
//
//
//             this.files = [...static_path, ...files]
//             console.log(this.files)
//         } catch (error) {
//
//             console.log(error)
//             let bb = error.response.data
//             $(".error-info").text(JSON.stringify(bb, null, '   '));
//         }
//     },
//     computed: {
//         fileUrl: function () {
//             return (path) => {
//                 return 'https://' + location.host + '/' + path
//             }
//         }
//     }
//
// })
// $('title').text(`GITHUB@${owner}`)
//
// app.mount('#app')



