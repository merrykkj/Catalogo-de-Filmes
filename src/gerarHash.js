import bcrypt from 'bcrypt';

const senhaParaHashear = 'senhalegal'; 
const saltRounds = 10; 

console.log(`Gerando hash para a senha: "${senhaParaHashear}"`);

bcrypt.hash(senhaParaHashear, saltRounds)
    .then(hash => {
        console.log('NOVO HASH:');
        console.log(hash);
    })
    .catch(err => {
        console.error('ERRO ao gerar o hash:', err);
    });