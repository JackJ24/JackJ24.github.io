extends State
class_name EnemyAttack

var Hitbox = ShapeCast3D
@export var anim_tree : AnimationTree
@onready var anim_state = anim_tree["parameters/playback"]
@export var enemy : CharacterBody3D
@export var Attack1Cool: Timer
signal hit()

func Enter():
	Hitbox = get_tree().get_first_node_in_group("AttackHitbox")
	Attack()
	Attack1Cool.start()
	
	pass
	
func Exit():
	pass

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func Physics_Update(delta: float) -> void:
	if Attack1Cool.is_stopped():
		Transitioned.emit(self,"Retreat")
	if Hitbox.is_colliding and Attack1Cool.is_stopped():
		print("hit")
		emit_signal("hit")
		
	
	pass


func Attack():
	print("im here")
	anim_state.travel("Dualwield_Melee_Attack_Slice")

	
