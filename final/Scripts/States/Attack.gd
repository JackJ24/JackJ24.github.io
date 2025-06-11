extends State
class_name EnemyAttack

var Hitbox = ShapeCast3D
@export var anim_tree : AnimationTree
@onready var anim_state = anim_tree["parameters/playback"]
@export var enemy : CharacterBody3D
signal hit()

func Enter():
	Hitbox = get_tree().get_first_node_in_group("AttackHitbox")
	Attack()
	
	pass
	
func Exit():
	pass

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	Transitioned.emit(self, "Retreat")
	pass


func Attack():
	print("im here")
	anim_state.travel("Dualwield_Melee_Attack_Slice")
	if Hitbox.is_colliding():
		print("hit")
		emit_signal("hit")
	
