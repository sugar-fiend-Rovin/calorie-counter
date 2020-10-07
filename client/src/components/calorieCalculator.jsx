const {age, sex, height, weight, goal, activityLevel} = null
        <Form onSubmit={submitGoalForm}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control
              type="number"
              value={age}
              className={errors.carbs && "is-invalid"}
              onChange={(e) =>
                setVariables({ ...variables, carbs: parseInt(e.target.value) })
              }
            />  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>

  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>male</option>
      <option>female</option>

    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>  </Form.Group>
</Form>
$('.macros-calculator input[name="height-system"]').click(function() {	
    var heightUnits = $(this).val();

    if (heightUnits == "meters") {
        $('.macros-calculator input[name="height-tens"]').attr("placeholder", "Meters");
        $('.macros-calculator input[name="height-units"]').attr("placeholder", "Centimeters");
        $('.macros-calculator input[name="height-tens"]').val("");
        $('.macros-calculator input[name="height-units"]').val("");
    }

    else if (heightUnits == "feet") {
        $('.macros-calculator input[name="height-tens"]').attr("placeholder", "Feet");
        $('.macros-calculator input[name="height-units"]').attr("placeholder", "Inches");
        $('.macros-calculator input[name="height-tens"]').val("");
        $('.macros-calculator input[name="height-units"]').val("");
    }
});

$('.macros-calculator input[name="weight-system"]').click(function() {	
    var weightUnits = $(this).val();

    if (weightUnits == "kilos") {
        $('.macros-calculator input[name="weight"]').attr("placeholder", "Kilograms");
        $('.macros-calculator input[name="weight"]').val("");
    }

    else if (weightUnits == "pounds") {
        $('.macros-calculator input[name="weight"]').attr("placeholder", "Pounds");
        $('.macros-calculator input[name="weight"]').val("");
    }
});
    
$('.macros-calculator .calc-submit').click(function() {
    var height = 0;
    var heightTens = parseInt($('.macros-calculator input[name="height-tens"]').val());
    var heightUnits= parseInt($('.macros-calculator input[name="height-units"]').val());
    var heightType = $('.macros-calculator input[name="height-system"]:checked').val();
var weight = parseInt($('.macros-calculator input[name="weight"]').val());
    var weightType = $('.macros-calculator input[name="weight-system"]:checked').val();
    var calories = 0;
    var age = parseInt($('.macros-calculator input[name=age]').val());
    var sex = $('.macros-calculator input[name=sex]:checked').val();
    var job = $('.macros-calculator input[name=activity]:checked').val();
var goal = $('.macros-calculator input[name=goal]:checked').val();
var carbs = 0;
var protons = 0;
var fats = 0;

    if (isNaN(age) || isNaN(heightTens) || isNaN(weight)) {
        $('.macros-calculator .calc-answer').show(0).html('<span style="color: #a30000;">Please enter values for all the fields.</span>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated flipInX');
        });
    }
    
    else {
        if(isNaN(heightUnits)) {
            heightUnits = 0;
        }

        if (heightType == "feet") {
            height = ((heightTens * 30.48) + (heightUnits * 2.54));
        }	
        else {
            height = (heightTens * 100) + heightUnits;
        }
        
        if (weightType == "pounds") {
            weight = (weight * 0.453592);
        }

        if (sex == "M") {
            calories = ((weight * 10) + (height * 6.25) - (age * 5) + 5);
        } 
        else {
            calories = ((weight * 10) + (height * 6.25) - (age * 5) - 161);
        }

        switch (job) {
            case "Lightly active (moderate exercise but sedentary job)":
                calories = Math.round(calories * 1.1);
                break;
            case "Moderately active (intense exercise but sedentary job)":
                calories = Math.round(calories * 1.3);
                break;
            case "Very active (moderate exercise and active job)":
                calories = Math.round(calories * 1.5);
                break;
            case "Extra active (intense exercise and active job)":
                calories = Math.round(calories * 1.7);
                break;
        }
        
        switch (goal) {
            case "Fat Loss":
                if (calories <= 2000) calories =  Math.round(0.9 * calories);
                if (calories > 2000) calories =  Math.round(0.8 * calories);
                carbs = Math.round(0.40 * calories / 4);
                protons = Math.round(0.40 * calories / 4);
                fats = Math.round(0.20 * calories / 9);
                break;
            case "Maintenance":
                carbs = Math.round(0.45 * calories / 4);
                protons = Math.round(0.30 * calories / 4);
                fats = Math.round(0.25 * calories / 9);
                break;
            case "Get Swole":
                calories += 500;
                carbs = Math.round(0.45 * calories / 4);
                protons = Math.round(0.30 * calories / 4);
                fats = Math.round(0.25 * calories / 9);
                break;
        }


        $('.macros-calculator .calc-answer').show(0).html('<div>Carbs: <span class="calories extra-condensed-regular">' + carbs + ' G per day.</span><br>Protein: <span class="calories extra-condensed-regular">' + protons + ' G per day.</span><br>Fats: <span class="calories extra-condensed-regular">' + fats + ' G per day.</span></div>').addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flipInX');
        });
    }
});