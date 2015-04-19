<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>设备信息</title>
<link type="text/css" rel="stylesheet" href="./style/data.css" />
<script type="text/javascript" src="./js/jquery.js">
</script>
<script type="text/javascript" src="./js/data.js">
</script>
</head>

<body>
<div>
<div id="content">
<h3>电源信息</h3>
<form name="data" action="" method="get">
<table>
	<tr>	<td class="right">机器编号：</td>
			<td><input id="machine" type="text" name="switch" value="1"  class="data" /></td>
	</tr>

	<tr>	<td class="right">电源编号：</td>
			<td><input id="source" type="text" name="voltage" value="1"
			  class="data" /></td>
	</tr>

	<tr>	<td class="right">参数：</td>
			<td><select id="param"><option>voltage</option><option>current</option><option>state</option></select></td>
	</tr>

	<tr>	<td class="right">值：</td>
			<td><input id="value" type="text" name="time" value="233"  
				 /></td>
	</tr>
	
	<tr>
			<td><button type="button" onclick="update()">提交</button></td>
			<td> </td>
	</tr>
</table>
	</p>


</form>


</div>

</body>
</html>
