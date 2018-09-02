      var Enter_button = document.getElementById("text_msg");
      Enter_button.addEventListener("keydown",function(event){
        if (event.keyCode === 13) 
        {
          send_msg();
        }
      });

      function open_emoji()
      {
        var emoji_display_value=document.getElementById('emoji_pic');
        if(emoji_display_value.style.display == 'none')
        {
          document.getElementById('emoji_pic').style.display='block';
        }
        var em=[];
        var temp;
        var emojis_array = [0x1F354, 0x1F604, 0x1F34A, 0x1F344, 0x1F363, 0x1F370, 0x1F355,
              0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x23F0, 0x1F4DA,0x1F3CF,0x1F609,
              0x1F431, 0x1F42A, 0x1F439, 0x1F424]; 

              for(var i=0; i< emojis_array.length; i++)
              {
                // console.log(String.fromCodePoint(emojis[i]));
                // console.log(i);
                temp = document.createElement('a');
                // div.appendChild(temp);
                temp.innerText = String.fromCodePoint(emojis_array[i]);
                document.getElementById('emojis').appendChild(temp);
                // var emoji_value = String.fromCodePoint(emojis_array[i]);
                // document.getElementById('emojis').innerHTML = emoji_value;
                // var values = document.getElementById('emojis');
               
                // document.getElementById('emojis').appendChild(p);
                
               // em +='<a>'kundan kumar'</a>';
              // em.appendChild(p);
                
              }
              // document.getElementById('emojis').innerText = em ;
      }

      function myFile(){
      var file_attach = document.getElementById('file-input');
      var txt = "";
       if ('files' in file_attach) 
          {    
            for (var i = 0; i < file_attach.files.length; i++) 
            {
                var file = file_attach.files[i];
                if ('name' in file && 'size' in file) 
                {
                 txt += "File: "+file.name+", size:"+ file.size + "bytes; ";
                } 
            }
          }
          document.getElementById('text_msg').value=txt;
      }

      var friend;

      function toggle_visibility(id,pic,name) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
        {
          e.style.display = 'block';
          document.getElementById('image_part').src=pic;
          document.getElementById('msg_part').innerHTML=name;
          friend = name;
          // document.getElementById('online_part').innerHTML=Online;
          // var friendname = "sfsdfs";
          // console.log("friendname");
          // var avs = document.getElementById('msg_part').value;
          // console.log(avs);
        }
      }

      function send_msg(){
        var d = new Date();
        var myhours = d.getHours();
        var myMinutes = d.getMinutes();
            var file_attach = document.getElementById('file-input');
            var txt = "";
            var chat_message = document.getElementById('text_msg').value;

            if(chat_message == '')
            {
              alert("please write some messages");
            }
            else
            {
              if(friend == undefined)
              {
                alert("Select your friend");
              } 
              else
              {
                document.getElementById('text_msg').value="";
  
                document.getElementById('print_msg').innerHTML += "<div style='width:50%;float:right; display:block;margin-left: 40% !important;background-color:#F1CDAB;padding:10px;margin:5px;border-radius:10px 10px 0px 10px; border: 1px solid black;'>"+chat_message+"<br><div style='font-size:12px; padding: 1px; color:red;'>"+myhours+":"+myMinutes+"</div></div>";
                // document.getElementById('print_msg').innerHTML += "<div style='float:right; max-width: 50%; height:60px; display:block; padding: 3px 20px !important; margin-left: 40% !important;' >"+rough+ "<br><div style=' font-size:12px; padding: 1px; >"+myhours+":"+myMinutes+"</div></div>";
              }
            }
            
        }

        const ul = document.getElementById('output');
        const url = 'https://randomuser.me/api/?results=10';
        // var name=[];
        var output='';
        fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {

          let authors = data.results;
          authors.map(function(author) {
            // console.log(`${author.name.first}`);
            // var name = `${author.name.first}`;
            // console.log(name);
            output += `
              <div class="row sideBar-body" onclick="toggle_visibility('msg_2nd','${author.picture.medium}','${author.name.first} ${author.name.last}');">
                <div class="col-sm-3 col-xs-3 sideBar-avatar">
                  <div class="avatar-icon">
                    <img src="${author.picture.medium}" style="width:55%; height:90%; border-radius:50%;  ";>
                  </div>
                </div>
                <div class="col-sm-9 col-xs-9 sideBar-main">
                  <div class="row">
                    <div class="col-sm-8 col-xs-8 sideBar-name">
                      <span class="name-meta">${author.name.first} ${author.name.last}
                      </span>
                    </div>
                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                      <span class="time-meta pull-right">09:12
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            `;
        });
        document.getElementById('output').innerHTML=output;
      })
      .catch(function(error) {
        console.log(error);
      });   

      

      