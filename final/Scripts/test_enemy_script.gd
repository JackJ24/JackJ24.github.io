extends Area3D

const MAX_HEALTH = 1000
var health = MAX_HEALTH


# Called when the node enters the scene tree for the first time.
func _ready():

	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	set_health()
	pass

func set_health():
	$EnemyHealth.max_value = MAX_HEALTH
	$EnemyHealth.value = health



func _on_player_damage(value):
	health = health - value
	pass # Replace with function body.
