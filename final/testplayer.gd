extends CharacterBody3D


@onready var spring_arm = $SpringArm3D
@onready var model = $Rig
@onready var anim_tree = $AnimationTree
@onready var anim_state = $AnimationTree.get("parameters/playback")
@onready var target = get_parent().get_node("Skeleton_Golem/Target")


var attacks = [     
	"1H_Melee_Attack_Slice_Diagonal",
	"1H_Melee_Attack_Stab",
	"1H_Melee_Attack_Chop"
	]
var Dodge = [     
	"Dodge_Forward",
	"Dodge_Backward",
	"Dodge_Left",
	"Dodge_Right"

	]
	
var LastAttack = 99999999999999
var ComboCount = 0
var ComboTimeWindow = 1.8
var IsAttacking = false
signal damage(value)
const MAX_HEALTH = 100
var Health = MAX_HEALTH
const MAX_STAMINA = 100
var Stamina = MAX_STAMINA
var HealthPotion = 3


var SPEED = 2
const JUMP_VELOCITY = 4.5

var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")

func _ready():
	IntBars()
	pass

func _physics_process(delta):
	LockOnCamera()
	SetBars()
	Attack()
	RegenHealth()
	death()
	
	if not is_on_floor():
		velocity.y -= gravity * delta
	
	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	if IsAttacking == false:
		
		var input_dir = Input.get_vector("Right", "Left", "Back", "Forward")
		var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()

		if direction :
			velocity.x = direction.x * SPEED
			velocity.z = direction.z * SPEED
		else:
			velocity.x = move_toward(velocity.x, 0, SPEED)
			velocity.z = move_toward(velocity.z, 0, SPEED)
			
		if Input.is_action_just_pressed("Roll"):
			roll()
		elif $Node2/RollWindow.is_stopped():
			anim_tree.set("parameters/Run, Walk, Idle/blend_position", Vector2(-velocity.x, velocity.z) / SPEED)
			$Area3D/CollisionShape3D.disabled = false
			SPEED = 2

		move_and_slide()
	
	pass
	


func check_time_since_last_attack():
	var thisAttack = Time.get_unix_time_from_system()
	#print(thisAttack - LastAttack)
	if thisAttack - LastAttack < ComboTimeWindow:
		LastAttack = Time.get_unix_time_from_system()
		return true
	return false
	
func Attack():

	#print(IsAttacking)

	if $Node2/CheckIfAttack.is_stopped():
		LastAttack = 9999999999
		IsAttacking = false
		ComboCount = 0
		RegenStamina()
		

		
	#print(ComboCount)
	if Input.is_action_just_pressed("LightAttack") and $AttackCooldown.is_stopped() and Stamina > 10:
		#print(check_time_since_last_attack())

		if check_time_since_last_attack() == true:
			if ComboCount == 0:
				anim_state.travel(attacks.get(0))
				ComboCount += 1
				$AttackCooldown.start()
				$Node2/CheckIfAttack.start()
				IsAttacking = true
				Stamina -= 10
				if $Hitbox.is_colliding():
					#print("hit")
					emit_signal("damage", 50)
					
			elif ComboCount == 1:
				anim_state.travel(attacks.get(1))
				ComboCount += 1
				$AttackCooldown.start()
				$Node2/CheckIfAttack.start()
				IsAttacking = true
				Stamina -= 10
				if $Hitbox.is_colliding():
					#print("hit")
					emit_signal("damage", 50)
					
			elif ComboCount == 2:
				anim_state.travel(attacks.get(2))
				ComboCount += 1
				$AttackCooldown.start()
				$Node2/CheckIfAttack.start()
				IsAttacking = true
				Stamina -= 10
				if $Hitbox.is_colliding():
					#print("hit")
					emit_signal("damage", 100)
					
			elif ComboCount == 3:
				ComboCount = 0
				$AttackCooldown.start()

		if check_time_since_last_attack() == false:
			ComboCount = 0
			LastAttack = 99999999999
			$AttackCooldown.start()
			$Node2/CheckIfAttack.start()
			IsAttacking = false


func LockOnCamera():
	look_at(target.global_position)
	self.rotate_object_local(Vector3(0,1,0), 3.14)

func roll():
	if $Node2/RollTimer.is_stopped and Stamina > 35:
		anim_state.travel(Dodge.get(0))
		SPEED = 7
		Stamina -= 35
		$Area3D/CollisionShape3D.disabled = true

		$Node2/RollWindow.start()
		$Node2/RollTimer.start()
	
func SetBars():
	SetStaminaBar()
	SetHealthBar()
	
func IntBars():
	IntHealthBar()
	IntStaminaBar()
	
func IntHealthBar():
	$Control/HealthBar.max_value = MAX_HEALTH
	$Control/HealthBar.value = Health
	
func SetHealthBar():
	$Control/HealthBar.value = Health
	
func IntStaminaBar():
	$Control/StaminaBar.max_value = MAX_STAMINA
	$Control/StaminaBar.value = Stamina
	
func SetStaminaBar():
	$Control/StaminaBar.value = Stamina
	
func RegenStamina():
	if Stamina < MAX_STAMINA:
		Stamina += 0.40
		#print("regening")

func RegenHealth():
	$Control/HealthPotionIcon/PotionRemain.text = str(HealthPotion)
	if Input.is_action_just_pressed("Heal") and Health < MAX_HEALTH and HealthPotion > 0:
		Health += 50
		HealthPotion -= 1
		if Health > MAX_HEALTH:
			Health = MAX_HEALTH
		
		
func death():
	if (Health <= 0):
		get_tree().quit()

		


func _on_skeleton_golem_e_damage(value: Variant) -> void:
	if( $Area3D/CollisionShape3D.disabled == false):
		print("real hit")
		Health = Health - value
	pass # Replace with function body.
