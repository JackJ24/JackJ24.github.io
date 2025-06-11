extends CharacterBody3D
class_name enemy

signal EDamage(value)
@export var anim_tree: AnimationTree
var player : CharacterBody3D
var move_speed =1 

# Called when the node enters the scene tree for the first time.
func _ready():
	player = get_tree().get_first_node_in_group("Player")
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(_delta):
	chase_target(player)
	move_and_slide()

	
	
	


func chase_target(target):
	
	anim_tree.set("parameters/Run,Idle/blend_position", 0.3)
	
	look_at(target.global_position)
	self.rotate_object_local(Vector3(0,1,0), 3.14)


func _on_attack_hit() -> void:
	emit_signal("EDamage", 50)
	pass # Replace with function body.
