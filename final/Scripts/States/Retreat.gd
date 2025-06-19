extends State
class_name EnemyRetreat


@export var enemy: CharacterBody3D
@export var move_speed := 1
var player : CharacterBody3D
@export var cooldown: Timer


func Enter():
	cooldown.start()
	pass
	
func Exit():
	pass


# Called when the node enters the scene tree for the first time.
func _ready():
	
	pass



# Called every frame. 'delta' is the elapsed time since the previous frame.
#walks away from player.
#changes state once a certain time has passed or is a distance away
func Physics_Update(_delta: float):
	player = get_tree().get_first_node_in_group("Player")
	var direction = player.global_position - enemy.global_position
	
	if direction.length() > 0:
		enemy.velocity = direction.normalized() * -move_speed

	else:
		enemy.velocity = Vector3()
		
	if direction.length() > 15 or cooldown.is_stopped():
		Transitioned.emit(self, "Follow")
