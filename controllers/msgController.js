exports.startSession = async (req, res) => {
    try {
        res.json({data: 'Hola mundo'})
        /* const { Client, MessageMedia } = require('whatsapp-web.js');

        var data = req.body.data;
        var msg = req.body.message;
        var img = (req.body.image).split(',')[1];
        
        const imageMedia = new MessageMedia('image/jpeg', img);
        

     
       const client = new Client();

        client.on('qr', (qr) => {
            res.send({ status: 1, msg: qr });
        });

        client.on('ready', () => {
            for (let i = 0; i < data.length; i++) {
                client.sendMessage('593' + data[i][0]+ '@c.us', msg, {media: imageMedia})
                .then(() => console.log('Mensaje enviado'))
                .catch((err) => console.log('Error al enviar el mensaje: ', err));
            }
        });

        client.initialize(); 
 */
    } catch (error) {
        console.log(error);
        res.send({ status: 0, msg: "ERROR: Ha ocurrido un error inesperado al crear el usuario, porfavor verifique y vuelva a intentarlo." });
    }
}