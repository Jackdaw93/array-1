
const jobs = ["Frontend", "Backend", "Desain", "Fullstact", "Sysadmin"];


jobs.forEach((job) => {
    document.write("<li>" + job + "</li>");
});

document.write("<br />Jumlah Data: " + jobs.length)