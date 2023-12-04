let konfirmasi = confirm ("Mau Main Tebak Angka?");

if(konfirmasi == true){
    let bot = Math.floor(Math.random() * 10 + 1)
    console.log(bot);

    let Player = parseInt(prompt("Masukkan Agka Tebakan 1 - 10"))
    console.log(Player);

    if(Player == bot){
        alert("Selamat kamu benar")
    }else if(Player > bot){
        alert("Angka terlalu tinggi")
    }else if(Player < bot){
        alert("Angka Terlalu Rendah")
    }else{
        konfirmasi = false
    }

    let konfirmasi = confirm("Ulang?")

    while(konfirmasi == true){
        if(konfirmasi == true){
            Player = parseInt(prompt("Masukan Angka tebakan lagi!!"))
    
            if(Player == bot){
                alert("Selamat kamu benar")
            }else if(Player > bot){
                alert("Angka terlalu tinggi")
            }else if(Player < bot){
                alert("Angka Terlalu Rendah")
            }else{
                alert("Salah input")
            }
        }else{
            break
        }

        konfirmasi = confirm("Ingin Mengulang Lagi?")
    }
    alert("Terimakasih Telah Bermain")
}
