const lastModified = new Date(document.lastModified);
const options = { 
year: 'numeric', 
month: 'long', 
day: 'numeric', 
hour: '2-digit', 
minute: '2-digit', 
hourCycle: 'h23'
};
const formattedDate = lastModified.toLocaleDateString('es-AR', options);
const updatedText = formattedDate.replace(/(\d{2}:\d{2})/, '$1hs');
document.getElementById('lastUpdated').innerText = `Última actualización: ${updatedText}`;