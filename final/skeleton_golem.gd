extends CharacterBody3D
class_name enemy

signal EDamage(value)
@export var anim_tree: AnimationTree
var player : CharacterBody3D
var move_speed =1 
var MaxHealth = 1000
var Health = MaxHealth
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")

# Called when the node enters the scene tree for the first time.
func _ready():
	SetHealth()
	player = get_tree().get_first_node_in_group("Player")
	pass # Replace with function body.



	

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(_delta):
	chase_target(player)
	if not is_on_floor():
		velocity.y -= gravity * _delta
	move_and_slide()
	HealthBar()

	
	
	


func chase_target(target):
	
	anim_tree.set("parameters/Run,Idle/blend_position", 0.3)

	if target:
		var direction = (target.global_position - global_position).normalized()
		var angle = atan2(direction.x, direction.z)
		# rotation_y = lerp_angle(rotation_y, angle, rotation_speed * delta) #Smooth rotation
		rotation.y = angle # Instant rotation
	

	#look_at(target.global_position)
	#self.rotate_object_local(Vector3(0,1,0), 3.14)


func _on_attack_hit() -> void:
	emit_signal("EDamage", 20)
	pass # Replace with function body.

func SetHealth():
	Health = MaxHealth
	$EnemyHealth.max_value = MaxHealth
	$EnemyHealth.value = MaxHealth
	
func HealthBar():
	$EnemyHealth.value = Health
	

func _on_player_damage(value: Variant) -> void:
	$audio/Hit.play()
	Health = Health - value
	pass # Replace with function body.
