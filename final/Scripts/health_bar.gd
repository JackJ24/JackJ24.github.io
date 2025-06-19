extends ProgressBar

const MAX_HEALTH = 100
var health = MAX_HEALTH


# Called when the node enters the scene tree for the first time.
func _ready():
	int_health_bar()
	pass # Replace with function body.



# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	set_health_bar()
	pass

func int_health_bar():
	$HealthBar.max_value = MAX_HEALTH
	$HealthBar.value = health
	
func set_health_bar():
	$HealthBar.value = health
