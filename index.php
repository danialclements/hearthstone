<html>
<head>
  <script src='vendor/jquery-2.1.0.min.js' type='text/javascript'></script>
  <script src='script/facebook.js' type='text/javascript'></script>
<link href= 'vendor/styles.css' rel='stylesheet'/>
<script src='vendor/underscore.js' type='text/javascript'></script>
<script src='vendor/backbone.js' type='text/javascript'></script>
<script id = 'listtemplate' type='text/template'>
 <form action=""> Pick Class
 <% for(var i = 0; i < 10; i++ ){ %>
 <input type="radio" name="hsclass" value= <%=classes1[i]%> ><%= classes1[i] %>
 <%} %>

 </form>
   <form action="" >Primary Stats<br>
<input type="radio" name="first" value="cost">Cost<br>
<input type="radio" name="first" value="rarity">Rarity
<input type="radio" name="first" value="name">Name

</form>

  <form action="" >Primary Stats<br>
<input type="radio" name="second" value="cost2">Cost<br>
<input type="radio" name="second" value="rarity2">Rarity
<input type="radio" name="second" value="name2">Name

</form>
<button id = 'submit'> button</button>

</script>
<script id = 'usernavtemplate' type="text/template">
<ul>
<li> <%= first_name %> <%= last_name %> </li>
</ul>

<button class = 'createdeckbutton'> <%=createdeck%> </button>
</script>
<script id = 'cardtemplate' type="text/template">
<div>
<ul class = 'tempul'>
<li class = 'templi'> <img src='http://wow.zamimg.com/images/hearthstone/cards/enus/original/<%=id %>.png'  <
<li> <%= name %> </li>
<li id = '<%= id %> ' class='addcard'> <%= button%></li>

</ul>
</div>
</script>
</head>
<body>
<div id = 'usernavbar'>
</div>
  <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
</fb:login-button>

<div id="status">
</div>

    <div id = "list"> </div>
   <div id= "cards1"> </div>


</script>

</body>
</script>
<script src='model/creaturemodel.js' type='text/javascript'></script>
<script src='collection/creaturecollection.js'  type='text/javascript'></script>
<script src='view/creatureview.js'  type='text/javascript'></script>
<script src='model/classmodel.js' type='text/javascript'></script>
<script src='view/classview.js'  type='text/javascript'></script>


</html>