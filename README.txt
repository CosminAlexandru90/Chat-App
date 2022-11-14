NOTITE CHAT APP

1. Vom crea urmatoarea structura:
   Aplicatie care va contine doua coloane:
      LAYOUT care va fi un meniu vertical in stanga si care va avea child in rutare componenta de MESSAGING.
      Componenta de MESSAGING compusa din doua componente randuri:
         Header Chat avand : titlu, input Search, icon alerta mesaje necitite si icon poza profil
         Body Chat compus din 3 componente coloane:
            Chats avand 4 randuri:
               Header cu titlu, search si buton de creare chat nou
               Butoane filtre
               Lista chaturi
               Footer cu input de feedback
            Fereastra Chat avand 4 randuri:
               Header cu titlu
               Mesaj de welcome
               Afisarea mesajelor din acel chat
               Input mesaj nou cu buton de Attach file
            Chat Dashboard avand 3 randuri:
               Chat Members/ Shared Files
               Customize Chat
               Privacy and Support

2. Routarea se va face astfel:
   - http://localhost:4200/ redirect to  http://localhost:4200/home
      - http://localhost:4200/home
      - http://localhost:4200/analytics
      - http://localhost:4200/browse
      - http://localhost:4200/profiles
      - http://localhost:4200/messaging - in care vor implementa aplicatia de chat
      - http://localhost:4200/archives

3. Baza de date va avea forma:
   array de conversatii care vor contine:
      -id
      -array de mesaje care sunt obiecte avand 3 key: expeditor, continut si data
      -admins - array de useri
      -members - array de useri

4. Aplicatia va sti cine este CurrentUser si va afisa pagina in functie de acesta

5. Paleta culori:
            Light Mode  |   Dark Mode
primary

