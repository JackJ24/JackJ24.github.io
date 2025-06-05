extends State
class_name EnemyFollow

@export var anim_tree: AnimationTree
@export var enemy: CharacterBody3D
@export var move_speed := 1
var player : CharacterBody3D

func Enter():
	player = get_tree().get_first_node_in_group("Player")


# Called when the node enters the scene tree for the first time.
func _ready():

	pass



# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):

	var direction = player.position - enemy.global_position
	
	if direction.length() > 2:
		enemy.velocity = direction.normalized() * move_speed
	else:
		enemy.velocity = Vector3()
		
	$animation.set("parameters/Run, Walk, Idle/blend_position", Vector2(enemy.velocity.x, velocity.z) / SPEED)
