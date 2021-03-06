module.exports = function(app){

  let candies = [
    {id: 1, name: "Chewing Gum", color: "Red" },
    {id: 2, name: "Pez",         color: "Green" },
    {id: 3, name: "Marshmallow", color: "Pink" },
    {id: 4, name: "Candy Stick", color: "Blue" },
  ];

  //  works
  app.get('/candies', (req, res)=>{
    res.json(candies);
  });

  //  works
  app.get('/candies/:id', (req, res)=>{
    res.json(candies.find((elem)=>{
      return elem.id === parseInt(req.params.id);
    }));
  });

  app.post('/candies', (req, res)=>{
    candies.push(req.body);
    res.json("{ok}");
  });

  app.put('/candies/:id', (req, res)=>{
      const passedInId = parseInt(req.params.id);
      var tka = candies.find((elem)=>{
        return elem.id === passedInId;
      });

      if (tka !== null) {

        var indx = candies.indexOf(tka);
        candies[indx] = req.body;
        res.json("{put ok}");
      }
      else {
        res.json("{put not ok =( }");
      }
  });

  // app.index('/candy', (req, res)=>{
  //   res.json(req.headers);
  // });

  app.delete('/candies/:id', (req, res)=>{
    const idToDelete = parseInt(req.params.id);
    var itemToDelete = candies.find((elem)=>{
      return elem.id === idToDelete;
    });

    var indx = candies.indexOf(itemToDelete);

    candies.splice(indx,1);
    res.json("{del ok}");
  });

  // app.get('/candy', (req, res)=>{
  //   res.json(req.headers.id);
  // });
  //
  // app.post('/candy',(req, res)=>{
  //   // res.send(req.body);
  //   res.json(req.body);
  //   // res.json(req.headers);
  //
  // });



  // app.delete('/candy:id,', (req, res)=>{
  //   const id = req.param.id;
  //   candies =
  //   candies.filter((elem)=>{
  //     return elem.id !== id;
  //   });
  //
  //   res.json(candies);

  // });
}
