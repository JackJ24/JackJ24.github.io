extends CharacterBody3D

const MAX_HEALTH = 100
var health = MAX_HEALTH
var SPEED = 2.0
const JUMP_VELOCITY = 4.5
var roll_magnitude = 30
var can_attack = true

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")


##draw
func _physics_process(delta):
	
	set_health_bar()
	movement(delta)
	RotateChar()
	move_and_slide()
	light_attack()
	
func movement(delta):
		# Add the gravity.
	if not is_on_floor():
		velocity.y -= gravity * delta

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var input_dir = Input.get_vector("Left", "Right", "Forward", "Back")
	var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	if direction:
		velocity.x = direction.x * SPEED
		velocity.z = direction.z * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)
		velocity.z = move_toward(velocity.z, 0, SPEED)
		



func RotateChar():
	if Input.is_key_pressed(KEY_LEFT):
		rotate_y(0.05)
	if Input.is_key_pressed(KEY_RIGHT):
		rotate_y(-0.05)
func int_health_bar():
	$HealthBar.max_value = MAX_HEALTH
	$HealthBar.value = health
	
func set_health_bar():
	$HealthBar.value = health
	

func light_attack():
	#attack if button pressed and cooldown over
	if Input.is_action_pressed("LightAttack") and can_attack:
		print("hi")
		can_attack = false
		$Hitbox/attack_cooldown.start()
		if $Hitbox.is_colliding():
			print("hi")
	#when cooldown ends, allow attack
	if $Hitbox/attack_cooldown.is_stopped():
		can_attack = true


#when player collides with with damage hitbox health goes down 
func _on_area_3d_area_entered(area):
	health = health - 10
	pass # Replace with function body.
	
