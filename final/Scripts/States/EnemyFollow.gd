extends State
class_name EnemyFollow




@export var enemy: CharacterBody3D
@export var move_speed := 1
var player : CharacterBody3D

func Enter():
	player = get_tree().get_first_node_in_group("Player")
	
func Exit():
	pass


# Called when the node enters the scene tree for the first time.
func _ready():

	pass



# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):

	var direction = player.global_position - enemy.global_position
	
	if direction.length() > 5:
		enemy.velocity = direction.normalized() * move_speed

	else:
		enemy.velocity = Vector3()
		
	if direction.length() < 5:
		Transitioned.emit(self, "attack")
