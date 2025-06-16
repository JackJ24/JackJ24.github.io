extends State
class_name EnemyAttack

var Hitbox = ShapeCast3D
@export var anim_tree : AnimationTree
@onready var anim_state = anim_tree["parameters/playback"]
@export var enemy : CharacterBody3D
@export var Attack1Cool: Timer
@export var Attack2Cool: Timer
var AttackNum = 0
signal hit()

func Enter():
	AttackNum = 0
	Hitbox = get_tree().get_first_node_in_group("AttackHitbox")
	Attack1()
	
	pass
	
func Exit():
	pass

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func Physics_Update(delta: float) -> void:

	if Hitbox.is_colliding and Attack1Cool.is_stopped() and AttackNum == 1:
		print("hit")
		emit_signal("hit")

	if Attack1Cool.is_stopped() and AttackNum == 1:
		Attack2()
	if Hitbox.is_colliding and Attack2Cool.is_stopped() and AttackNum == 2:
		print("hit")
		emit_signal("hit")
		Transitioned.emit(self,"Retreat")
		


		
	
	pass


func Attack1():
	print("im here")
	anim_state.travel("Dualwield_Melee_Attack_Slice")
	Attack1Cool.start()
	AttackNum = AttackNum + 1




func Attack2():
	if randf_range(0, 100) > 1:
		anim_state.travel("Dualwield_Melee_Attack_Chop")
		Attack2Cool.start()
		AttackNum = AttackNum + 1
	else:
		Transitioned.emit(self,"Retreat")

	
